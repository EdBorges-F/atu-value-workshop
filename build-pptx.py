"""Build Frontier Canvas GTM Presentation — Executive Deck Orchestrator output.
Winston narrative (empowerment + contributions) + consulting layouts.
"""
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN
from pptx.enum.shapes import MSO_SHAPE
import os

# Brand colors
MS_BLUE = RGBColor(0x00, 0x78, 0xD4)
MS_DARK = RGBColor(0x24, 0x29, 0x2E)
WHITE = RGBColor(0xFF, 0xFF, 0xFF)
LIGHT_GRAY = RGBColor(0xF5, 0xF5, 0xF5)
ACCENT = RGBColor(0x50, 0xE6, 0xFF)
MID_GRAY = RGBColor(0x66, 0x66, 0x66)
DARK_GRAY = RGBColor(0x55, 0x55, 0x55)

W = Inches(13.333)
H = Inches(7.5)

prs = Presentation()
prs.slide_width = W
prs.slide_height = H


def dark_slide():
    slide = prs.slides.add_slide(prs.slide_layouts[6])
    bg = slide.background.fill
    bg.solid()
    bg.fore_color.rgb = MS_DARK
    return slide


def light_slide():
    slide = prs.slides.add_slide(prs.slide_layouts[6])
    bg = slide.background.fill
    bg.solid()
    bg.fore_color.rgb = WHITE
    return slide


def txt(slide, left, top, width, height, text, size=24, bold=False, color=WHITE, align=PP_ALIGN.LEFT):
    box = slide.shapes.add_textbox(left, top, width, height)
    tf = box.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = text
    p.font.size = Pt(size)
    p.font.bold = bold
    p.font.color.rgb = color
    p.alignment = align
    return tf


def note(slide, text):
    slide.notes_slide.notes_text_frame.text = text


# ═══════════════════════════════════════════════════════════════
# SLIDE 1: TITLE
# ═══════════════════════════════════════════════════════════════
s = dark_slide()
txt(s, Inches(1), Inches(2), Inches(11), Inches(1.5),
    "Frontier Canvas", size=54, bold=True, color=WHITE)
txt(s, Inches(1), Inches(3.5), Inches(11), Inches(1),
    "One AE + Copilot CLI = Production App From Scratch",
    size=28, color=ACCENT)
txt(s, Inches(1), Inches(5.5), Inches(11), Inches(0.8),
    "Edison Borges  \u00b7  ATU Americas  \u00b7  May 2026",
    size=16, color=LIGHT_GRAY)
bar = s.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(1), Inches(3.3), Inches(3), Pt(4))
bar.fill.solid()
bar.fill.fore_color.rgb = MS_BLUE
bar.line.fill.background()

# ═══════════════════════════════════════════════════════════════
# SLIDE 2: ABOUT ME
# ═══════════════════════════════════════════════════════════════
s = dark_slide()
txt(s, Inches(1), Inches(1.5), Inches(11), Inches(1),
    "Edison Borges", size=40, bold=True, color=WHITE)
txt(s, Inches(1), Inches(2.5), Inches(11), Inches(0.8),
    "Account Technology Unit  \u00b7  Americas", size=22, color=LIGHT_GRAY)

credentials = [
    "Field AE focused on Frontier Transformation & AI adoption",
    "Built Frontier Canvas solo using Copilot CLI \u2014 the tools we sell",
    "120 commits, 22K+ lines of production code, zero infrastructure cost",
]
top = Inches(3.8)
for cred in credentials:
    dot = s.shapes.add_shape(MSO_SHAPE.OVAL, Inches(1.2), top + Inches(0.12), Inches(0.15), Inches(0.15))
    dot.fill.solid()
    dot.fill.fore_color.rgb = MS_BLUE
    dot.line.fill.background()
    txt(s, Inches(1.6), top, Inches(10), Inches(0.7), cred, size=20, color=WHITE)
    top += Inches(0.9)
note(s, "Keep brief \u2014 20 seconds. The credibility IS the tool you built.")

# ═══════════════════════════════════════════════════════════════
# SLIDE 3: PROBLEM
# ═══════════════════════════════════════════════════════════════
s = light_slide()
txt(s, Inches(0.8), Inches(0.5), Inches(11.5), Inches(1.2),
    "AEs Walk Into CxO Meetings Cold \u2014 That\u2019s a Revenue Leak",
    size=36, bold=True, color=MS_DARK)

pillars = [
    ("\U0001F6AB", "No structured prep tool", "for C-level AI conversations"),
    ("\U0001F4CA", "40-slide decks don\u2019t fit", "a 20-minute CxO slot"),
    ("\U0001F504", "Every AE reinvents the wheel", "no evidence-to-insight flow"),
]
for i, (icon, line1, line2) in enumerate(pillars):
    left = Inches(1 + i * 4)
    txt(s, left, Inches(2.5), Inches(3.5), Inches(1), icon, size=48, color=MS_BLUE, align=PP_ALIGN.CENTER)
    txt(s, left, Inches(3.5), Inches(3.5), Inches(0.8), line1, size=20, bold=True, color=MS_DARK, align=PP_ALIGN.CENTER)
    txt(s, left, Inches(4.2), Inches(3.5), Inches(0.8), line2, size=16, color=MID_GRAY, align=PP_ALIGN.CENTER)

# ═══════════════════════════════════════════════════════════════
# SLIDE 4: SOLUTION
# ═══════════════════════════════════════════════════════════════
s = light_slide()
txt(s, Inches(0.8), Inches(0.5), Inches(11.5), Inches(1.2),
    "10 Minutes of Structured Prep Changes the Outcome",
    size=36, bold=True, color=MS_DARK)

principles = [
    ("\U0001F916", "Copilot-native", "Chat + Cowork as engine\nNo custom AI backend"),
    ("\u2601\uFE0F", "Zero infrastructure", "Static site, localStorage\n$0 cost"),
    ("\u2705", "Customer-ready", "CELA compliance baked\ninto every output"),
    ("\u26A1", "10 min to value", "Longer than a coffee break?\nAEs won\u2019t use it"),
]
for i, (icon, title, desc) in enumerate(principles):
    col = i % 2
    row = i // 2
    left = Inches(1 + col * 6)
    top = Inches(2.2 + row * 2.5)
    box = s.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left, top, Inches(5.2), Inches(2))
    box.fill.solid()
    box.fill.fore_color.rgb = LIGHT_GRAY
    box.line.fill.background()
    txt(s, left + Inches(0.3), top + Inches(0.2), Inches(4.5), Inches(0.7),
        f"{icon}  {title}", size=20, bold=True, color=MS_DARK)
    txt(s, left + Inches(0.3), top + Inches(0.9), Inches(4.5), Inches(1),
        desc, size=16, color=DARK_GRAY)

# ═══════════════════════════════════════════════════════════════
# SLIDE 5: DEV LOOP (CLI screenshot)
# ═══════════════════════════════════════════════════════════════
s = dark_slide()
txt(s, Inches(0.8), Inches(0.3), Inches(11.5), Inches(1),
    "Copilot CLI Turns Natural Language Into Production Code",
    size=32, bold=True, color=WHITE)
if os.path.exists("cli-screenshot-3.png"):
    s.shapes.add_picture("cli-screenshot-3.png", Inches(1.5), Inches(1.5), Inches(10), Inches(5.5))
note(s, "I describe problems in natural language. Copilot plans. I review and approve. It builds, I validate, we deploy.")

# ═══════════════════════════════════════════════════════════════
# SLIDE 6: VELOCITY KPIs
# ═══════════════════════════════════════════════════════════════
s = dark_slide()
txt(s, Inches(0.8), Inches(0.3), Inches(11.5), Inches(1),
    "120 Commits \u00b7 22K+ Lines \u00b7 One Person \u00b7 Zero Cost",
    size=32, bold=True, color=WHITE)

kpis = [("120", "commits"), ("22K+", "lines of code"), ("85", "customer stories"), ("101", "use cases")]
for i, (num, label) in enumerate(kpis):
    left = Inches(0.8 + i * 3.1)
    txt(s, left, Inches(2.5), Inches(3), Inches(1.5), num, size=64, bold=True, color=ACCENT, align=PP_ALIGN.CENTER)
    txt(s, left, Inches(4), Inches(3), Inches(0.6), label, size=18, color=LIGHT_GRAY, align=PP_ALIGN.CENTER)

if os.path.exists("cli-screenshot-2.png"):
    pic = s.shapes.add_picture("cli-screenshot-2.png", Inches(2), Inches(4.8), Inches(9), Inches(2.5))
    sp_tree = s.shapes._spTree
    sp_tree.remove(pic._element)
    sp_tree.insert(2, pic._element)

# ═══════════════════════════════════════════════════════════════
# SLIDE 7: PRODUCT DEMO (2x2 grid)
# ═══════════════════════════════════════════════════════════════
s = light_slide()
txt(s, Inches(0.8), Inches(0.2), Inches(11.5), Inches(0.8),
    "Profile \u2192 Challenges \u2192 Summary \u2192 Action Center",
    size=28, bold=True, color=MS_DARK, align=PP_ALIGN.CENTER)

screenshots = [
    ("demo-screenshots/01-profile.png", "Step 1: Profile"),
    ("demo-screenshots/02-challenges.png", "Step 2: Challenges"),
    ("demo-screenshots/03-exec-summary.png", "Step 3: Summary"),
    ("demo-screenshots/04-action-center.png", "Step 4: Action Center"),
]
for i, (path, label) in enumerate(screenshots):
    col = i % 2
    row = i // 2
    left = Inches(0.5 + col * 6.4)
    top = Inches(1.2 + row * 3.1)
    if os.path.exists(path):
        s.shapes.add_picture(path, left, top, Inches(6), Inches(2.8))
    txt(s, left, top + Inches(2.85), Inches(6), Inches(0.4), label, size=14, color=MID_GRAY, align=PP_ALIGN.CENTER)
note(s, "Profile captures context. Challenges maps priorities. Summary builds the story. Action Center generates 8 customer-ready deliverables.")

# ═══════════════════════════════════════════════════════════════
# SLIDE 8: ITERATION (before/after)
# ═══════════════════════════════════════════════════════════════
s = light_slide()
txt(s, Inches(0.8), Inches(0.5), Inches(11.5), Inches(1),
    "Real Field Feedback Ships Same Day \u2014 Not Next Quarter",
    size=32, bold=True, color=MS_DARK)

txt(s, Inches(1), Inches(1.8), Inches(5), Inches(0.5), "FEEDBACK", size=14, bold=True, color=MS_BLUE)
txt(s, Inches(7), Inches(1.8), Inches(5.5), Inches(0.5), "SHIPPED", size=14, bold=True, color=MS_BLUE)

feedbacks = [
    ("\u201CSmart Fill isn\u2019t extracting stakeholders\u201D", "Broadened to all C-level/VP+ \u2014 shipped next day"),
    ("\u201CToo many prompts, just need one for the meeting\u201D", "Merged 3 into 1 Customer Presentation Package"),
    ("\u201CWhich Copilot do I use for what?\u201D", "Distinct Chat vs Cowork buttons with phase badges"),
]
for i, (fb, shipped) in enumerate(feedbacks):
    top = Inches(2.5 + i * 1.5)
    txt(s, Inches(1), top, Inches(5.5), Inches(1.2), fb, size=18, color=MID_GRAY)
    txt(s, Inches(6.3), top, Inches(0.5), Inches(1), "\u2192", size=24, bold=True, color=MS_BLUE, align=PP_ALIGN.CENTER)
    txt(s, Inches(7), top, Inches(5.5), Inches(1.2), shipped, size=18, bold=True, color=MS_DARK)

# ═══════════════════════════════════════════════════════════════
# SLIDE 9: SCALABILITY
# ═══════════════════════════════════════════════════════════════
s = light_slide()
txt(s, Inches(0.8), Inches(0.5), Inches(11.5), Inches(1),
    "This Pattern Scales to Any Solution Area",
    size=36, bold=True, color=MS_DARK)

pillars2 = [
    ("\U0001F504", "The Formula", "Field pain \u2192 Copilot CLI builds \u2192\nCowork delivers customer output"),
    ("\U0001F50C", "Plug-and-Play", "Swap data (use cases, stories,\nchallenges) for any Solution Area"),
    ("\U0001F3C6", "The Proof", "Building WITH the tools\nIS the proof they work"),
]
for i, (icon, title, desc) in enumerate(pillars2):
    left = Inches(0.8 + i * 4.2)
    box = s.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left, Inches(2.2), Inches(3.8), Inches(4))
    box.fill.solid()
    box.fill.fore_color.rgb = LIGHT_GRAY
    box.line.fill.background()
    txt(s, left + Inches(0.3), Inches(2.5), Inches(3.2), Inches(1), icon, size=48, color=MS_BLUE, align=PP_ALIGN.CENTER)
    txt(s, left + Inches(0.3), Inches(3.5), Inches(3.2), Inches(0.7), title, size=22, bold=True, color=MS_DARK, align=PP_ALIGN.CENTER)
    txt(s, left + Inches(0.3), Inches(4.3), Inches(3.2), Inches(1.5), desc, size=16, color=DARK_GRAY, align=PP_ALIGN.CENTER)

# ═══════════════════════════════════════════════════════════════
# SLIDE 10: CONTRIBUTIONS CLOSE
# ═══════════════════════════════════════════════════════════════
s = dark_slide()
txt(s, Inches(0.8), Inches(0.8), Inches(11.5), Inches(1.2),
    "What You Now Have That You Didn\u2019t 12 Minutes Ago",
    size=36, bold=True, color=WHITE)

contributions = [
    "A replicable pattern for turning field pain into production tools using Copilot",
    "Living proof that the tools we sell accelerate US \u2014 not just customers",
    "A blueprint to build YOUR version for your Solution Area",
]
for i, contrib in enumerate(contributions):
    top = Inches(2.8 + i * 1.4)
    dot = s.shapes.add_shape(MSO_SHAPE.OVAL, Inches(1.2), top + Inches(0.12), Inches(0.2), Inches(0.2))
    dot.fill.solid()
    dot.fill.fore_color.rgb = MS_BLUE
    dot.line.fill.background()
    txt(s, Inches(1.7), top, Inches(10), Inches(1), contrib, size=24, color=WHITE)

txt(s, Inches(1), Inches(6.5), Inches(11), Inches(0.5),
    "This slide stays up during Q&A.", size=12, color=LIGHT_GRAY, align=PP_ALIGN.CENTER)

# ═══════════════════════════════════════════════════════════════
# SLIDE 11: APPENDIX
# ═══════════════════════════════════════════════════════════════
s = light_slide()
txt(s, Inches(0.8), Inches(0.3), Inches(11.5), Inches(0.8),
    "Appendix: The 8 Cowork Prompts", size=28, bold=True, color=MS_DARK)

prompts = [
    ("\U0001F4C4", "Executive Summary Deck", "HTML + PPTX"),
    ("\U0001F4AC", "Conversation Guide", "HTML + Word"),
    ("\U0001F3AF", "Customer Presentation", "HTML + PPTX"),
    ("\U0001F91D", "Stakeholder Alignment", "HTML"),
    ("\U0001F4E7", "Executive Briefing Email", "Outlook draft"),
    ("\U0001F4E8", "Follow-Up Email", "Outlook draft"),
    ("\U0001F4CB", "Account Team Handoff", "HTML"),
    ("\U0001F3C6", "Competitive Differentiation", "HTML"),
]
for i, (icon, name, output) in enumerate(prompts):
    col = i % 2
    row = i // 2
    left = Inches(0.8 + col * 6.3)
    top = Inches(1.3 + row * 1.4)
    box = s.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left, top, Inches(5.8), Inches(1.2))
    box.fill.solid()
    box.fill.fore_color.rgb = LIGHT_GRAY
    box.line.fill.background()
    txt(s, left + Inches(0.2), top + Inches(0.1), Inches(4.5), Inches(0.7),
        f"{icon}  {name}", size=18, bold=True, color=MS_DARK)
    txt(s, left + Inches(0.2), top + Inches(0.7), Inches(4.5), Inches(0.5),
        f"Output: {output}", size=14, color=MID_GRAY)

# Save
output_path = "Frontier-Canvas-GTM-Presentation.pptx"
prs.save(output_path)
print(f"Saved: {output_path}")
print(f"Slides: {len(prs.slides)}")
