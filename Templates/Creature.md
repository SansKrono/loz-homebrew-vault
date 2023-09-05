# <%tp.file.title%>
<%await tp.file.move("/TBW/Creatures/" + tp.file.title)%>
_<% tp.frontmatter.size %> <% tp.frontmatter.type %> (<% tp.frontmatter.subtype %>), <% tp.frontmatter.alignment %>

- **Armor Class:** <% tp.frontmatter.ac %> (<% tp.frontmatter.armourtype %>)
- **Hit Points:** <% tp.frontmatter.hp %> (10d12 + 40)
- **Speed:** <% tp.frontmatter.walkingspeed %> ft.

---

#### **Abilities**

|   str   |   dex   |   con   |  int   |   wis   |   cha   |
|:-------:|:-------:|:-------:|:------:|:-------:|:-------:|
| <% tp.frontmatter.str %> (<% Math.floor((tp.frontmatter.str - 10) / 2) %>) | <% tp.frontmatter.dex %> (<% Math.floor((tp.frontmatter.dex - 10) / 2) %>) | <% tp.frontmatter.con %> (<% Math.floor((tp.frontmatter.con - 10) / 2) %>) | <% tp.frontmatter.int %> (<% Math.floor((tp.frontmatter.int - 10) / 2) %>) | <% tp.frontmatter.wis %> (<% Math.floor((tp.frontmatter.wis - 10) / 2) %>) | <% tp.frontmatter.cha %> (<% Math.floor((tp.frontmatter.cha - 10) / 2) %>) |

#### **Skills**

| Skill        | Bonus |
| ------------ | ----- |
| Athletics    | +7    |
| intimidation | +1    |

#### **actions**

- **Multiattack:** Gorak makes two slam attacks.
- **Slam:** _Melee Weapon Attack:_ +7 to hit, reach 5 ft., one target. _Hit:_ 18 (2d10 + 5) bludgeoning damage.
- **Roaring intimidation (Recharge 5-6):** Gorak lets out a booming roar. All creatures within 20 feet must succeed on a DC 14 wisdom saving throw or become frightened for 1 round.

#### **Legendary actions (2)**

- **Push-Up Power:** Gorak does a set of quick push-ups, regaining 10 hit points.
- **Ground Slam:** Gorak slams his fists into the ground, causing a small earthquake. Each creature within 10 feet must succeed on a DC 16 dexterity saving throw or be knocked prone.