// src/data/exam.js
// BCH 335 Exam IV — 50-question practice exam
// Distribution: 20 Lipids & Membranes, 20 PDH & CAC, 10 ATP & OxPhos

export const examConfig = {
  subject: 'BCH 335 Exam IV',
  totalQuestions: 50,
  passThreshold: 70,
  timed: false,
  timeLimitMin: 90
};

export const exam = [
  // ===================== LIPIDS & MEMBRANES (20) =====================
  {
    q: 'Which characteristic is UNIQUE to lipids relative to the other major biomolecule classes (carbs, proteins, nucleic acids)?',
    type: 'mcq',
    choices: [
      'They are polymers of repeating monomer units',
      'They are defined by solubility (hydrophobic / non-polar) rather than by a shared backbone',
      'They always contain nitrogen',
      'They fold into defined 3D shapes to function'
    ],
    correct: 1,
    explanation: 'Lipids are the only biomolecule class defined by a physical property — solubility in non-polar solvents — rather than by a common backbone or monomer. This is why the class is so chemically diverse (fatty acids, sterols, sphingolipids, waxes, etc.).',
    difficulty: 'E',
    chapter: 'Lipids & Membranes'
  },
  {
    q: 'Why are triacylglycerols (fats) a better long-term energy store than glycogen?',
    type: 'mcq',
    choices: [
      'Fats are more reduced → release more ATP per gram (~9 kcal/g vs 4); they are anhydrous (no water of hydration)',
      'Glycogen cannot be oxidized',
      'Fats can be metabolized anaerobically',
      'Glycogen is toxic at high concentrations'
    ],
    correct: 0,
    explanation: 'Fatty-acid carbons are far more reduced than sugar carbons, so complete oxidation releases far more ATP per gram. Fats also store anhydrously (~0 g water) whereas glycogen binds ~2 g water per gram of carbohydrate. Net: fats store ~6x more usable energy per gram.',
    difficulty: 'E',
    chapter: 'Lipids & Membranes'
  },
  {
    q: 'Which of the following is an omega-3 fatty acid?',
    type: 'mcq',
    choices: ['Palmitic acid (16:0)', 'Oleic acid (18:1, Δ9)', 'α-Linolenic acid (18:3, Δ9,12,15)', 'Arachidonic acid (20:4, Δ5,8,11,14)'],
    correct: 2,
    explanation: 'Omega naming counts from the methyl end. α-Linolenic acid has its last double bond 3 carbons from the methyl end → ω-3. Arachidonic acid\'s last double bond is 6 from the methyl end → ω-6. Essential fatty acids include linoleic (ω-6) and α-linolenic (ω-3).',
    difficulty: 'M',
    chapter: 'Lipids & Membranes'
  },
  {
    q: 'Which class of lipid is used by organisms primarily for waterproofing and surface protection (leaves, feathers, insect cuticle)?',
    type: 'mcq',
    choices: ['Triacylglycerols', 'Phosphoglycerolipids', 'Waxes', 'Sphingolipids'],
    correct: 2,
    explanation: 'Waxes are esters of long-chain fatty acids with long-chain alcohols. Their saturation and chain length make them solid and strongly hydrophobic at biological temperatures — ideal for waterproof coatings and structural barriers.',
    difficulty: 'E',
    chapter: 'Lipids & Membranes'
  },
  {
    q: 'Which component provides the PRIMARY rigidity (or "fluidity buffering") of animal plasma membranes?',
    type: 'mcq',
    choices: ['Phosphatidylcholine', 'Sphingomyelin alone', 'Cholesterol', 'Cardiolipin'],
    correct: 2,
    explanation: 'Cholesterol intercalates between phospholipid acyl chains. Its rigid steroid ring restricts chain movement at higher temperatures (decreases fluidity) but its bulk also prevents tight packing at low temperatures (increases fluidity). Net: it buffers membrane fluidity and increases mechanical stiffness.',
    difficulty: 'E',
    chapter: 'Lipids & Membranes'
  },
  {
    q: 'Which statement is NOT TRUE of lipid rafts?',
    type: 'mcq',
    choices: [
      'They are enriched in cholesterol and sphingolipids',
      'They are more ordered and thicker than surrounding bilayer',
      'They concentrate GPI-anchored proteins and some signaling receptors',
      'They are covalently cross-linked, static structures the size of whole cells'
    ],
    correct: 3,
    explanation: 'Lipid rafts are dynamic, nanoscale (~10–200 nm), non-covalent assemblies — not static or large. They ARE enriched in cholesterol + sphingolipids, ARE thicker/more ordered, and DO concentrate GPI-anchored and palmitoylated signaling proteins.',
    difficulty: 'M',
    chapter: 'Lipids & Membranes'
  },
  {
    q: 'Which statement about the ABO blood-group antigens is TRUE?',
    type: 'mcq',
    choices: [
      'They are protein antigens on the RBC surface',
      'They are glycosphingolipid (and glycoprotein) antigens; A has GalNAc added, B has Gal added, O has neither',
      'O-type individuals carry both A and B antigens',
      'The antigen differences are driven by fatty acid chain length'
    ],
    correct: 1,
    explanation: 'ABO antigens are carbohydrate epitopes built on a common H-antigen precursor attached to ceramide (glycosphingolipids) or to membrane proteins. Type A adds GalNAc, type B adds galactose, type O leaves the H antigen unmodified.',
    difficulty: 'M',
    chapter: 'Lipids & Membranes'
  },
  {
    q: 'Phosphatidylserine is normally restricted to which leaflet of the plasma membrane, and what does its appearance on the opposite leaflet signal?',
    type: 'mcq',
    choices: [
      'Outer leaflet; signals healthy cells',
      'Inner (cytoplasmic) leaflet; externalization signals apoptosis (cells marked for phagocytosis)',
      'Both leaflets equally',
      'Inner leaflet; externalization signals cell division'
    ],
    correct: 1,
    explanation: 'Flippases (ATP-dependent) actively keep PS on the inner/cytoplasmic leaflet in healthy cells. During apoptosis, flippase inhibition + scramblase activation exposes PS on the outer leaflet — an "eat me" signal recognized by phagocytes.',
    difficulty: 'H',
    chapter: 'Lipids & Membranes'
  },
  {
    q: 'Which is the correct structural definition of a SPHINGOLIPID?',
    type: 'mcq',
    choices: [
      'Glycerol backbone + 2 fatty acids + phosphate headgroup',
      'Sphingosine backbone + 1 fatty acid (amide-linked) + polar headgroup (phosphate or sugar)',
      'Sterol ring system',
      'Isoprenoid terpene polymer'
    ],
    correct: 1,
    explanation: 'Sphingolipids are built on sphingosine (an amino alcohol with a long hydrocarbon tail). An amide-linked fatty acid gives ceramide; adding phosphocholine → sphingomyelin; adding sugar(s) → cerebrosides/gangliosides.',
    difficulty: 'M',
    chapter: 'Lipids & Membranes'
  },
  {
    q: 'Which lipid is a signature lipid of the inner mitochondrial membrane and stabilizes respiratory-chain supercomplexes?',
    type: 'mcq',
    choices: ['Phosphatidylcholine', 'Cardiolipin (diphosphatidylglycerol)', 'Sphingomyelin', 'Cholesterol'],
    correct: 1,
    explanation: 'Cardiolipin has four acyl chains and two phosphate groups. It is essentially exclusive to the inner mitochondrial membrane, where it stabilizes Complex III, Complex IV and the F0F1 supercomplex assemblies.',
    difficulty: 'M',
    chapter: 'Lipids & Membranes'
  },
  {
    q: 'Integral membrane proteins are most often held in the bilayer by what structural feature?',
    type: 'mcq',
    choices: [
      'Hydrogen bonds to phosphate headgroups',
      'Hydrophobic α-helix (or β-barrel) regions ~20 residues long, with hydrophobic side chains facing the acyl core',
      'Covalent bonds to phospholipid tails',
      'Metal coordination with Mg2+'
    ],
    correct: 1,
    explanation: 'Single-pass and multi-pass integral proteins use stretches of ~20 hydrophobic residues (often α-helical) long enough to span the hydrocarbon core. Outer-membrane porins use β-barrels instead. Peripheral proteins, by contrast, are anchored by lipid modifications or electrostatic contacts.',
    difficulty: 'M',
    chapter: 'Lipids & Membranes'
  },
  {
    q: 'According to the fluid-mosaic model, which motion of phospholipids is FASTEST under normal conditions?',
    type: 'mcq',
    choices: [
      'Lateral diffusion within one leaflet',
      'Transverse "flip-flop" between leaflets',
      'Rotation around their long axis',
      'Both rotation and lateral diffusion are fast; flip-flop is very slow without flippases'
    ],
    correct: 3,
    explanation: 'Rotation and lateral diffusion happen on micro-to-millisecond timescales. Spontaneous flip-flop is very slow (hours to days) because the polar headgroup has to cross the hydrophobic core — this is why cells require flippases/floppases/scramblases.',
    difficulty: 'M',
    chapter: 'Lipids & Membranes'
  },
  {
    q: 'Which of the following best explains why membranes tend to be thicker in regions enriched with sphingolipids and cholesterol?',
    type: 'mcq',
    choices: [
      'Sphingolipid acyl chains are longer and more saturated, and cholesterol further straightens them — producing a more ordered, thicker bilayer',
      'Sphingolipids contain extra glycerol',
      'Cholesterol adds hydroxyl headgroups',
      'Those lipids are covalently linked together'
    ],
    correct: 0,
    explanation: 'Sphingolipid acyl chains are typically longer (often 22–24 C) and more saturated than glycerophospholipid chains. Cholesterol\'s rigid ring straightens them further. Result: a thicker, more ordered raft domain that preferentially recruits certain proteins.',
    difficulty: 'H',
    chapter: 'Lipids & Membranes'
  },
  {
    q: 'True or False: Increasing the DEGREE OF UNSATURATION in the fatty acid tails of a phospholipid lowers its melting temperature and increases membrane fluidity at physiological temperature.',
    type: 'tf',
    choices: ['True', 'False'],
    correct: 0,
    explanation: 'True. cis double bonds introduce ~30° kinks that prevent tight packing and lower Tm. Organisms in cold environments (fish, plants in winter) desaturate membrane lipids to keep them fluid.',
    difficulty: 'E',
    chapter: 'Lipids & Membranes'
  },
  {
    q: 'True or False: The amphipathic nature of phospholipids is the single most important property driving spontaneous bilayer formation.',
    type: 'tf',
    choices: ['True', 'False'],
    correct: 0,
    explanation: 'True. Amphipathicity + the hydrophobic effect drive self-assembly. Polar heads face water; acyl tails cluster inward to maximize water entropy. The bilayer is the thermodynamic minimum.',
    difficulty: 'E',
    chapter: 'Lipids & Membranes'
  },
  {
    q: 'Short answer: Name one omega-3 essential fatty acid and one omega-6 essential fatty acid.',
    type: 'short',
    correct: 'omega-3: alpha-linolenic acid (18:3). omega-6: linoleic acid (18:2).',
    explanation: 'Mammals cannot introduce double bonds past Δ9, so linoleic (ω-6, 18:2 Δ9,12) and α-linolenic (ω-3, 18:3 Δ9,12,15) must come from the diet. They are precursors to arachidonic acid (ω-6) and EPA/DHA (ω-3).',
    difficulty: 'M',
    chapter: 'Lipids & Membranes'
  },
  {
    q: 'Short answer: What does "amphipathic" mean, and why is it required for bilayer formation?',
    type: 'short',
    correct: 'Amphipathic = molecule has both a hydrophilic (polar) region and a hydrophobic (non-polar) region. Phospholipids bury their acyl tails away from water and expose their polar heads to water, self-assembling into bilayers.',
    explanation: 'Phospholipids have a polar headgroup + two non-polar acyl tails. In water, this dual character drives self-assembly into bilayers/micelles where tails are sequestered in a hydrophobic core and heads face the aqueous phase — the hydrophobic effect in action.',
    difficulty: 'E',
    chapter: 'Lipids & Membranes'
  },
  {
    q: 'Short answer: Rank the three types of phospholipid motion in a bilayer (lateral diffusion, rotation, transverse flip-flop) from fastest to slowest.',
    type: 'short',
    correct: 'Rotation ~ lateral diffusion >>> flip-flop (flip-flop is very slow without flippases)',
    explanation: 'Rotation and lateral movement are fast (µs–ms). Flip-flop requires moving a charged head through the hydrophobic core, so it is intrinsically slow (hours–days); cells use ATP-dependent flippases to catalyze it.',
    difficulty: 'M',
    chapter: 'Lipids & Membranes'
  },
  {
    q: 'True or False: Glycosphingolipids are always found on the cytoplasmic leaflet of the plasma membrane.',
    type: 'tf',
    choices: ['True', 'False'],
    correct: 1,
    explanation: 'False. Glycosphingolipids are found on the OUTER (exoplasmic) leaflet — their carbohydrates project into the extracellular space where they function in cell-cell recognition and antigen presentation (e.g., ABO blood groups).',
    difficulty: 'M',
    chapter: 'Lipids & Membranes'
  },
  {
    q: 'Which best describes cholesterol\'s structure?',
    type: 'mcq',
    choices: [
      'A linear isoprenoid chain',
      'A fused four-ring (tetracyclic) steroid nucleus with a hydroxyl at C3 and a short aliphatic tail',
      'Glycerol with three fatty acid tails',
      'A sphingosine backbone'
    ],
    correct: 1,
    explanation: 'Cholesterol has the classic steroid nucleus (three six-membered rings + one five-membered) with a 3β-hydroxyl group and an 8-carbon aliphatic tail. The OH orients toward the aqueous phase while the rings + tail sit among the acyl chains of the bilayer.',
    difficulty: 'M',
    chapter: 'Lipids & Membranes'
  },

  // ===================== PDH & CAC (20) =====================
  {
    q: 'Which principle of enzyme regulation is NOT illustrated by the pyruvate dehydrogenase (PDH) complex?',
    type: 'mcq',
    choices: [
      'Substrate channeling through multienzyme complexes',
      'Product inhibition (NADH and acetyl-CoA)',
      'Covalent modification (phosphorylation inactivates)',
      'Zymogen activation by proteolytic cleavage'
    ],
    correct: 3,
    explanation: 'PDH is NOT a zymogen. It IS regulated by substrate channeling (the 3 enzymes pass intermediates directly), product inhibition (NADH, acetyl-CoA feedback), and covalent modification (PDH kinase phosphorylates → inactive; PDH phosphatase dephosphorylates → active).',
    difficulty: 'M',
    chapter: 'PDH & CAC'
  },
  {
    q: 'Where in the mammalian cell does the pyruvate dehydrogenase complex reside?',
    type: 'mcq',
    choices: ['Cytosol', 'Mitochondrial matrix', 'Outer mitochondrial membrane', 'Endoplasmic reticulum lumen'],
    correct: 1,
    explanation: 'PDH is in the mitochondrial matrix. Pyruvate generated by glycolysis in the cytosol is imported through the outer membrane and then through the inner membrane (mitochondrial pyruvate carrier, MPC) into the matrix where PDH oxidatively decarboxylates it to acetyl-CoA.',
    difficulty: 'E',
    chapter: 'PDH & CAC'
  },
  {
    q: 'Which of the following CAC reactions is NOT a redox reaction?',
    type: 'mcq',
    choices: [
      'Isocitrate → α-ketoglutarate (IDH)',
      'α-Ketoglutarate → succinyl-CoA (α-KGDH)',
      'Succinyl-CoA → succinate (succinyl-CoA synthetase)',
      'Malate → oxaloacetate (MDH)'
    ],
    correct: 2,
    explanation: 'Succinyl-CoA synthetase is a substrate-level phosphorylation, NOT a redox step. The other three (IDH, αKG-DH, MDH) each produce NADH. The 4th CAC redox step is SDH (succinate → fumarate, FADH2).',
    difficulty: 'M',
    chapter: 'PDH & CAC'
  },
  {
    q: 'After one complete turn of the citric acid cycle starting from acetyl-CoA labeled with C-14 at its carbonyl carbon, what fraction of the C-14 ends up in the oxaloacetate at the end of the turn?',
    type: 'mcq',
    choices: ['0', '1/2', '1 (all of it)', 'None — both labeled carbons are released as CO2'],
    correct: 1,
    explanation: 'The two carbons released as CO2 in the first turn (at IDH and αKGDH) come from OXALOACETATE, not from the acetyl-CoA. Both of the original acetyl-CoA carbons remain — but succinate is SYMMETRIC, so they scramble equally between the two ends. The labeled carbons end up split 50/50 across positions in oxaloacetate → 1/2 the label in any given position.',
    difficulty: 'H',
    chapter: 'PDH & CAC'
  },
  {
    q: 'Malonate is a competitive inhibitor of which CAC enzyme, and which intermediate therefore accumulates when malonate is added?',
    type: 'mcq',
    choices: [
      'Citrate synthase; citrate accumulates',
      'Succinate dehydrogenase; succinate accumulates',
      'Fumarase; fumarate accumulates',
      'Malate dehydrogenase; malate accumulates'
    ],
    correct: 1,
    explanation: 'Malonate is a close structural analog of succinate — 3 carbons with two carboxylates — and it competitively blocks succinate dehydrogenase. Historically this is how Krebs showed SDH was a distinct CAC enzyme. Succinate accumulates upstream of the block.',
    difficulty: 'M',
    chapter: 'PDH & CAC'
  },
  {
    q: 'The citrate synthase reaction is classically described as an example of which mechanism?',
    type: 'mcq',
    choices: [
      'Random-order binding',
      'Induced-fit — oxaloacetate binds first and triggers the conformational change that forms the acetyl-CoA site',
      'Covalent catalysis through a lysine Schiff base',
      'Metal-ion catalysis with Zn2+'
    ],
    correct: 1,
    explanation: 'Citrate synthase exhibits classic induced fit. Oxaloacetate binds first and drives a closing motion that creates the acetyl-CoA binding site and occludes water (which would otherwise hydrolyze the thioester). This makes the reaction essentially irreversible and is a major regulatory node.',
    difficulty: 'M',
    chapter: 'PDH & CAC'
  },
  {
    q: 'Which reaction is anaplerotic — that is, replenishes CAC intermediates drained off for biosynthesis?',
    type: 'mcq',
    choices: [
      'Citrate → α-KG',
      'Pyruvate + CO2 + ATP → oxaloacetate + ADP + Pi (pyruvate carboxylase)',
      'Succinyl-CoA → succinate',
      'Fumarate → malate'
    ],
    correct: 1,
    explanation: 'Pyruvate carboxylase is the major anaplerotic enzyme, replacing OAA that\'s been siphoned off for gluconeogenesis, aspartate synthesis, etc. It requires biotin and is allosterically activated by acetyl-CoA (a signal that the CAC needs more oxaloacetate to keep up).',
    difficulty: 'M',
    chapter: 'PDH & CAC'
  },
  {
    q: 'Which CAC intermediate is commonly EXPORTED from the mitochondrion to feed cytosolic anabolism (fatty-acid & cholesterol synthesis)?',
    type: 'mcq',
    choices: ['Succinate', 'α-Ketoglutarate', 'Citrate', 'Fumarate'],
    correct: 2,
    explanation: 'Citrate is exported from the matrix by the citrate-malate antiporter. In the cytosol, ATP-citrate lyase cleaves it to acetyl-CoA (for fatty-acid and cholesterol synthesis) + OAA. This is the primary way mitochondrial acetyl units reach the cytosol.',
    difficulty: 'M',
    chapter: 'PDH & CAC'
  },
  {
    q: 'A rapid rise in the NADH/NAD+ ratio in the matrix does what to the rate of the citric acid cycle?',
    type: 'mcq',
    choices: [
      'Speeds it up — NADH drives the cycle forward',
      'Slows it down — NADH is a product that inhibits PDH, IDH and αKG-DH and NAD+ is the required substrate',
      'No effect',
      'Only affects MDH, not the rest of the cycle'
    ],
    correct: 1,
    explanation: 'NADH is a product; high NADH/NAD+ inhibits PDH and the CAC dehydrogenases (IDH, αKG-DH, MDH) both by product inhibition and substrate limitation. This is how the CAC is coupled to the ETC — if ETC is slow, NADH rises and the CAC idles.',
    difficulty: 'M',
    chapter: 'PDH & CAC'
  },
  {
    q: 'Which of the five cofactors of the PDH complex is the one that carries the acetyl group after decarboxylation?',
    type: 'mcq',
    choices: ['TPP (thiamine pyrophosphate)', 'Lipoamide (lipoic acid attached to lysine)', 'FAD', 'Biotin'],
    correct: 1,
    explanation: 'TPP decarboxylates pyruvate, yielding hydroxyethyl-TPP. The acetyl group is transferred to lipoamide (E2) as acetyl-dihydrolipoamide. Lipoamide then passes the acetyl onto CoA-SH. FAD and NAD+ reoxidize the now-reduced lipoamide (at E3).',
    difficulty: 'H',
    chapter: 'PDH & CAC'
  },
  {
    q: 'True or False: Negative allosteric regulation at one site on an enzyme PRECLUDES positive allosteric regulation at another site on the same enzyme.',
    type: 'tf',
    choices: ['True', 'False'],
    correct: 1,
    explanation: 'False. Most regulated enzymes integrate BOTH positive and negative allosteric signals at distinct sites. Classic example: PFK-1 is activated by AMP and fructose-2,6-BP while being inhibited by ATP and citrate.',
    difficulty: 'M',
    chapter: 'PDH & CAC'
  },
  {
    q: 'True or False: High AMP signals that the cell is energy-poor and allosterically upregulates the citric acid cycle (e.g., activates isocitrate dehydrogenase).',
    type: 'tf',
    choices: ['True', 'False'],
    correct: 0,
    explanation: 'True. Isocitrate dehydrogenase is allosterically activated by ADP/AMP (and Ca2+), signaling low energy charge. Conversely, ATP and NADH inhibit it. The CAC is tuned to cellular energy demand at multiple regulatory nodes.',
    difficulty: 'M',
    chapter: 'PDH & CAC'
  },
  {
    q: 'How many CO2 molecules are released and how many NADH, FADH2 and GTP are produced per ONE turn of the citric acid cycle (starting with acetyl-CoA)?',
    type: 'mcq',
    choices: [
      '1 CO2, 2 NADH, 1 FADH2, 1 GTP',
      '2 CO2, 3 NADH, 1 FADH2, 1 GTP',
      '2 CO2, 2 NADH, 2 FADH2, 1 GTP',
      '3 CO2, 3 NADH, 1 FADH2, 2 GTP'
    ],
    correct: 1,
    explanation: 'One CAC turn releases 2 CO2 (at IDH and αKGDH) and produces 3 NADH (IDH, αKGDH, MDH), 1 FADH2 (SDH), and 1 GTP (succinyl-CoA synthetase).',
    difficulty: 'E',
    chapter: 'PDH & CAC'
  },
  {
    q: 'The CAC can function in ANABOLISM as well as catabolism. Which pair correctly matches a CAC intermediate to a biosynthesis product?',
    type: 'mcq',
    choices: [
      'α-Ketoglutarate → glutamate (by transamination)',
      'Succinate → glucose directly',
      'Fumarate → fatty acids directly',
      'Citrate → nucleotides directly'
    ],
    correct: 0,
    explanation: 'α-Ketoglutarate accepts an amino group from another amino acid (transamination) → glutamate, which is then the amino-nitrogen donor for many other amino acids. Oxaloacetate similarly → aspartate. Succinyl-CoA → heme.',
    difficulty: 'M',
    chapter: 'PDH & CAC'
  },
  {
    q: 'Short answer: How many total redox reactions occur in the conversion of ONE pyruvate all the way through one CAC turn?',
    type: 'short',
    correct: '5 redox reactions — 1 at PDH (NADH) + 4 in the CAC itself (IDH → NADH, αKGDH → NADH, SDH → FADH2, MDH → NADH)',
    explanation: 'PDH contributes 1 redox (NADH) to convert pyruvate → acetyl-CoA. One CAC turn then contributes 4 more: IDH (NADH), αKG-DH (NADH), SDH (FADH2), MDH (NADH). Total per pyruvate = 5 redox events, yielding 4 NADH + 1 FADH2.',
    difficulty: 'H',
    chapter: 'PDH & CAC'
  },
  {
    q: 'Short answer: Why does arsenite inhibit the PDH complex, and what cofactor does it target?',
    type: 'short',
    correct: 'Arsenite binds the two thiol groups of the REDUCED lipoamide cofactor (the -SH groups of dihydrolipoyl-lysine), forming a stable ring. This locks lipoamide in the reduced form; E3 cannot reoxidize it and the whole complex stalls.',
    explanation: 'Arsenite complexes vicinal dithiols, especially the two —SH of reduced lipoamide. The sulfurs cannot cycle back to the disulfide form, so E3 has nothing to reduce and the complex stalls after one turnover.',
    difficulty: 'H',
    chapter: 'PDH & CAC'
  },
  {
    q: 'Short answer: Name the three irreversible regulated steps of the CAC.',
    type: 'short',
    correct: 'Citrate synthase, isocitrate dehydrogenase, and α-ketoglutarate dehydrogenase',
    explanation: 'These three are strongly exergonic and all heavily regulated. Citrate synthase is feedback-inhibited by ATP, NADH, citrate, succinyl-CoA. IDH and αKG-DH are inhibited by NADH and activated by ADP/Ca2+.',
    difficulty: 'M',
    chapter: 'PDH & CAC'
  },
  {
    q: 'Which of the following best describes the overall net reaction of the PDH complex?',
    type: 'mcq',
    choices: [
      'Pyruvate + CoA + NAD+ → acetyl-CoA + CO2 + NADH',
      'Pyruvate + CoA → acetyl-CoA + CO2',
      'Pyruvate + ATP → PEP + ADP',
      'Pyruvate + CO2 + ATP → OAA + ADP + Pi'
    ],
    correct: 0,
    explanation: 'PDH: pyruvate + CoA-SH + NAD+ → acetyl-CoA + CO2 + NADH + H+. It is an oxidative decarboxylation that commits pyruvate to oxidative metabolism rather than gluconeogenesis or fermentation.',
    difficulty: 'E',
    chapter: 'PDH & CAC'
  },
  {
    q: 'Why does fluoroacetate (the active metabolite of "1080" rat poison) kill via the CAC?',
    type: 'mcq',
    choices: [
      'It directly inhibits cytochrome c oxidase',
      'It is metabolized to fluorocitrate, which inhibits aconitase — citrate accumulates and the cycle stops',
      'It destroys ATP synthase',
      'It uncouples the ETC'
    ],
    correct: 1,
    explanation: 'Fluoroacetate is activated by cellular enzymes to fluoroacetyl-CoA, which citrate synthase uses to produce FLUOROCITRATE. Fluorocitrate is a potent inhibitor of aconitase — citrate accumulates, the cycle halts, energy production collapses.',
    difficulty: 'H',
    chapter: 'PDH & CAC'
  },
  {
    q: 'True or False: The CAC runs in reverse in some strict anaerobes but runs oxidatively (forward) in aerobic mitochondria.',
    type: 'tf',
    choices: ['True', 'False'],
    correct: 0,
    explanation: 'True. Some anaerobes use a reductive (reverse) TCA for CO2 fixation, while aerobic organisms run it forward as an oxidative hub. The forward direction is essentially irreversible in aerobic cells because of the 3 strongly exergonic steps (CS, IDH, αKGDH).',
    difficulty: 'H',
    chapter: 'PDH & CAC'
  },

  // ===================== ATP & OXPHOS (10) =====================
  {
    q: 'Which complex of the ETC cannot pump protons?',
    type: 'mcq',
    choices: ['Complex I', 'Complex II', 'Complex III', 'Complex IV'],
    correct: 1,
    explanation: 'Complex II (succinate dehydrogenase) does not pump protons. The ΔE° from FADH2 → Q is too small. This is why FADH2 only yields ~1.5 ATP vs 2.5 ATP from NADH.',
    difficulty: 'E',
    chapter: 'ATP & OxPhos'
  },
  {
    q: 'How many total ATP (approximately) are produced per glucose in cells using the malate–aspartate shuttle?',
    type: 'mcq',
    choices: ['~24', '~28', '~30', '~32'],
    correct: 3,
    explanation: '~32 ATP: 2 (net glycolysis) + 2 GTP (CAC) + 2 NADH (glycolysis) + 2 NADH (PDH) + 6 NADH (CAC) + 2 FADH2 (CAC). The malate-aspartate shuttle delivers cytosolic NADH as matrix NADH (2.5 ATP each); the glycerol-3-P shuttle gives only ~30 ATP.',
    difficulty: 'M',
    chapter: 'ATP & OxPhos'
  },
  {
    q: 'In oxidative phosphorylation disease (genetic ETC defect), which molecule is classically ELEVATED in blood and WHY?',
    type: 'mcq',
    choices: [
      'Ketone bodies — because fats are not being oxidized',
      'Alanine (and lactate) — pyruvate accumulates due to high NADH and is transaminated to alanine / reduced to lactate',
      'Urea — because the urea cycle is destroyed',
      'Glucose — because ATP synthase drives glucose production'
    ],
    correct: 1,
    explanation: 'Blocked ETC → NADH builds up → PDH and CAC dehydrogenases inhibited → pyruvate accumulates. Pyruvate is transaminated to alanine (elevated blood alanine) AND reduced to lactate by LDH (lactic acidosis). Classic exam signature of mitochondrial disease.',
    difficulty: 'H',
    chapter: 'ATP & OxPhos'
  },
  {
    q: 'Roughly how many protons flow back through F0F1 ATP synthase per ATP synthesized (not counting transport costs)?',
    type: 'mcq',
    choices: ['1', '~3', '~6', '~10'],
    correct: 1,
    explanation: '~3 H+ per ATP synthesized. An additional ~1 H+ is spent driving the Pi / ATP-ADP translocase, so ~4 H+ per cytosolic ATP delivered.',
    difficulty: 'M',
    chapter: 'ATP & OxPhos'
  },
  {
    q: 'What does the F1 portion of ATP synthase do?',
    type: 'mcq',
    choices: [
      'It is the proton channel',
      'It is the catalytic head (α3β3γε) that synthesizes ATP using rotation of the γ-shaft',
      'It transports pyruvate',
      'It oxidizes NADH'
    ],
    correct: 1,
    explanation: 'F1 is the matrix-side catalytic head. Its three β subunits cycle through empty/ADP-loose/ATP-tight conformations as the γ-shaft rotates. F0 is the membrane-embedded proton channel that couples H+ flow to γ rotation.',
    difficulty: 'M',
    chapter: 'ATP & OxPhos'
  },
  {
    q: 'Which inhibitor specifically blocks ATP synthase by plugging the F0 proton channel?',
    type: 'mcq',
    choices: ['Rotenone', 'Antimycin A', 'Cyanide', 'Oligomycin'],
    correct: 3,
    explanation: 'Oligomycin binds F0 (the "o" in oligomycin-sensitive is literally what F0 is named for) and blocks H+ flow through the c-ring. Rotenone blocks Complex I, antimycin blocks III, cyanide blocks IV.',
    difficulty: 'M',
    chapter: 'ATP & OxPhos'
  },
  {
    q: 'Short answer: Describe in one sentence what it means to "uncouple" oxidative phosphorylation, and give one example agent that does it.',
    type: 'short',
    correct: 'Uncoupling = letting H+ cross the inner membrane without going through ATP synthase, so electron transport runs but ATP is not made; energy is released as heat. Example: DNP (2,4-dinitrophenol) or natural protein UCP1 (thermogenin) in brown fat.',
    explanation: 'Uncouplers short-circuit the coupling between the proton gradient and ATP synthesis. The ETC keeps (or even accelerates) running to try to rebuild Δp, but the gradient dissipates as heat. DNP is a synthetic example; thermogenin (UCP1) in brown adipose tissue is the natural version used for non-shivering thermogenesis.',
    difficulty: 'M',
    chapter: 'ATP & OxPhos'
  },
  {
    q: 'True or False: O2 is the terminal electron acceptor of the mitochondrial ETC and is reduced to H2O at Complex IV.',
    type: 'tf',
    choices: ['True', 'False'],
    correct: 0,
    explanation: 'True. At Complex IV, O2 + 4 e- + 4 H+ → 2 H2O. Loss of this terminal sink (e.g., CN-, CO, or severe hypoxia) crashes the entire ETC because electrons have nowhere to go.',
    difficulty: 'E',
    chapter: 'ATP & OxPhos'
  },
  {
    q: 'The proton-motive force (Δp) is comprised of which two components?',
    type: 'mcq',
    choices: [
      'Temperature + pressure',
      'A chemical gradient (ΔpH) plus an electrical gradient (Δψ, the membrane potential)',
      'ATP + ADP concentrations',
      'NADH + FADH2 concentrations'
    ],
    correct: 1,
    explanation: 'Δp = Δψ − (2.3RT/F)·ΔpH. Pumping H+ across the membrane stores energy both as a proton concentration difference (ΔpH) AND as a charge separation (Δψ, with matrix negative, IMS positive).',
    difficulty: 'E',
    chapter: 'ATP & OxPhos'
  },
  {
    q: 'True or False: Reactive oxygen species (ROS) are produced primarily at Complexes I and III, and the cell defends against them using a glutathione (GSH) / NADPH system.',
    type: 'tf',
    choices: ['True', 'False'],
    correct: 0,
    explanation: 'True. Complexes I and III (the Qo semiquinone •Q-) are the major ROS leak sites, producing superoxide. SOD → H2O2 → glutathione peroxidase (uses 2 GSH) → H2O; glutathione reductase regenerates GSH using NADPH from the pentose phosphate pathway.',
    difficulty: 'H',
    chapter: 'ATP & OxPhos'
  }
];
