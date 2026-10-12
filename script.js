import os, json, zipfile

base = "/mnt/data/investor-relations-flashcards"
script_path = os.path.join(base, "script.js")
html_path = os.path.join(base, "index.html")
with open(script_path, "r", encoding="utf-8") as f:
    js = f.read()
with open(html_path, "r", encoding="utf-8") as f:
    html = f.read()

# The nine terms from the previous message plus the twelve terms in the latest message.
new_cards = [
    {"term":"Balance Sheet","definition":"A financial statement showing a company’s assets, liabilities, and shareholders’ equity at a specific point in time. It follows the equation: Assets = Liabilities + Shareholders’ Equity."},
    {"term":"Book Value","definition":"The value of a company’s net assets as recorded on its balance sheet, generally calculated as total assets minus total liabilities. Book value per share divides shareholders’ equity by the number of common shares outstanding; it may differ substantially from market value."},
    {"term":"Bottom Line","definition":"A common term for a company’s net income or net profit—the amount left after expenses, taxes, interest, and other costs are deducted from revenue. It can also refer more broadly to the final result or overall impact."},
    {"term":"Burn Rate","definition":"The rate at which a company spends its available cash, often used to describe startups or businesses that are not yet cash-flow positive. Net burn typically measures how much more cash goes out than comes in over a period."},
    {"term":"Cash Flow Statement","definition":"A financial statement showing how cash and cash equivalents move into and out of a company during a period. It groups cash flows into operating, investing, and financing activities."},
    {"term":"Chief Financial Officer (CFO)","definition":"The senior executive responsible for a company’s financial strategy and oversight, including financial reporting, budgeting, forecasting, capital management, and often relationships with investors and analysts."},
    {"term":"Chief Operating Officer (COO)","definition":"A senior executive who oversees a company’s day-to-day operations and helps turn strategy into execution. Responsibilities vary but may include operational performance, processes, and coordination across business functions."},
    {"term":"Earnings per Share (EPS)","definition":"A measure of profit allocated to each share of common stock, generally calculated as net income available to common shareholders divided by the weighted-average number of common shares outstanding. Diluted EPS also considers potentially dilutive securities."},
    {"term":"Enterprise Value (EV)","definition":"A measure of a company’s total operating value often calculated as market capitalization plus debt and preferred equity, plus noncontrolling interests where applicable, minus cash and cash equivalents. It is commonly used alongside measures such as EBITDA to compare companies with different capital structures."},
    {"term":"Financial Statements","definition":"Formal reports that summarize a company’s financial position and performance. The main statements are the balance sheet, income statement, cash flow statement, and statement of shareholders’ equity."},
    {"term":"Form 990","definition":"An annual information return that most tax-exempt organizations file with the IRS. It reports information about an organization’s mission, programs, governance, revenue, expenses, and executive compensation; it is not the standard annual filing for publicly traded companies."},
    {"term":"Generally Accepted Accounting Principles (GAAP)","definition":"A framework of accounting standards and conventions used to prepare financial statements. In the United States, U.S. GAAP is established primarily by the Financial Accounting Standards Board (FASB) for nongovernmental entities."},
    {"term":"Income Statement","definition":"A financial statement reporting revenue, expenses, and profit or loss over a period of time. It shows how much a company earned and spent during that period."},
    {"term":"International Financial Reporting Standards (IFRS)","definition":"A set of accounting standards issued by the International Accounting Standards Board (IASB) and used in many countries. IFRS aims to make financial statements more comparable across organizations and jurisdictions."},
    {"term":"Market Capitalization","definition":"The total market value of a company’s outstanding equity shares, commonly calculated as share price multiplied by shares outstanding. It measures the market value of equity, not the company’s total enterprise value."},
    {"term":"Price-to-Earnings Ratio (P/E Ratio)","definition":"A valuation ratio calculated by dividing a company’s share price by its earnings per share. It indicates how much investors are paying for each dollar of earnings, though interpretation depends on growth expectations, risk, and accounting factors."},
    {"term":"Profit Margin","definition":"A measure of how much profit a company earns relative to its revenue, usually expressed as a percentage. Net profit margin is net income divided by revenue; gross and operating margins use different profit measures."},
    {"term":"Quarter-over-Quarter (QoQ)","definition":"A comparison of a metric from one fiscal quarter with the previous fiscal quarter. QoQ changes can show short-term trends, but seasonality and the number of days in each period can affect comparisons."},
    {"term":"Stock Chart","definition":"A visual display of a stock’s price over time, often showing open, high, low, and closing prices, as well as trading volume. Charts can help users observe trends and volatility but do not guarantee future price movements."},
    {"term":"Top Line","definition":"A common term for revenue or sales, which typically appears near the top of an income statement. Top-line growth means revenue is increasing, before accounting for expenses and profit."},
    {"term":"Valuation","definition":"The process of estimating the economic or market value of a company, asset, or security. Methods can include comparable-company analysis, discounted cash flow, and precedent transactions; results depend on assumptions and available information."},
    {"term":"Year-over-Year (YoY)","definition":"A comparison of a metric with the same period one year earlier—for example, this quarter’s revenue compared with the same quarter last year. YoY comparisons help account for some seasonal patterns."}
]

marker = "];\nconst STORAGE_KEY"
if marker not in js:
    raise RuntimeError("Could not locate the flashcard data section in script.js")
# Avoid duplicate additions if this cell is rerun.
existing_terms = set()
data_section = js.split("const initialCards = ", 1)[1].split(";\nconst STORAGE_KEY", 1)[0]
existing_cards = json.loads(data_section + "]")
existing_terms = {c["term"].casefold() for c in existing_cards}
to_add = [c for c in new_cards if c["term"].casefold() not in existing_terms]
if to_add:
    insert = ",\n" + json.dumps(to_add, ensure_ascii=False, indent=2)[1:-1]
    js = js.replace(marker, insert + marker, 1)

# Set all visible count labels to the resulting actual deck size.
data_section = js.split("const initialCards = ", 1)[1].split(";\nconst STORAGE_KEY", 1)[0]
all_cards = json.loads(data_section + "]")
total = len(all_cards)
import re
html = re.sub(r"Corporate Finance · \d+ cards", f"Corporate Finance · {total} cards", html)
html = re.sub(r"<b>\d+</b>", f"<b>{total}</b>", html, count=1)
html = re.sub(r"Card 1 of \d+", f"Card 1 of {total}", html)

with open(script_path, "w", encoding="utf-8") as f:
    f.write(js)
with open(html_path, "w", encoding="utf-8") as f:
    f.write(html)

readme_path = os.path.join(base, "README.md")
with open(readme_path, "r", encoding="utf-8") as f:
    readme = f.read()
readme = re.sub(r"\b\d+-card deck\b", f"{total}-card deck", readme)
with open(readme_path, "w", encoding="utf-8") as f:
    f.write(readme)

zip_path = f"/mnt/data/study-bloom-flashcards-{total}-terms.zip"
with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED) as z:
    for name in ["index.html", "style.css", "script.js", "README.md"]:
        z.write(os.path.join(base, name), arcname=name)

print(f"Added {len(to_add)} new cards; deck now contains {total} terms.")
print(f"Created {zip_path}")
