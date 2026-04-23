import React from 'react';
import { Callout, Table, Pill, Card } from '../components/Visual.jsx';

const chapter = {
  id: 1,
  title: 'Lipids, Membranes & FA Catabolism',
  subtitle: 'Lipid structure \u2192 membrane dynamics \u2192 \u03b2-oxidation',
  blocks: [
    {
      id: 'classification',
      title: 'Lipid Classification & Biological Functions',
      subtitle: 'The one thing all lipids have in common is hydrophobicity',
      images: [],
      content: (
        <>
          <p>
            Lipids are a <strong>structurally and functionally diverse class of organic compounds</strong> united by one property: <em>poor solubility in water and high solubility in nonpolar organic solvents</em>. They are usually hydrocarbon-rich, can be amphipathic, and — critically — are <strong>not polymers</strong>. A past-exam trap: "which of the following do ALL lipids have in common?" — the answer is <strong>hydrophobicity</strong>, not a carboxylic acid, not a long hydrocarbon chain (steroids are rings!), not conjugated double bonds.
          </p>
          <p>Lipids fall into two broad buckets:</p>
          <ul>
            <li><strong>Lipids that do NOT contain fatty acids:</strong> cholesterol and other sterols, fat-soluble vitamins (A, D, E, K), isoprenoids.</li>
            <li><strong>Complex lipids (FA-containing):</strong> storage lipids (triacylglycerols, waxes) and membrane lipids (glycerophospholipids, sphingolipids).</li>
          </ul>
          <Table
            headers={["Function", "Example Lipid", "Why It Matters"]}
            rows={[
              ["Long-term energy storage", "Triacylglycerols (TAGs)", "~83% of human energy; >50% in liver/heart/resting muscle"],
              ["Membrane structure", "Glycerophospholipids, sphingolipids, cholesterol", "Pliable, asymmetric, fluid bilayers"],
              ["Enzyme cofactors", "Vitamin K, Coenzyme Q", "Clotting; mitochondrial ATP synthesis"],
              ["Signaling", "Steroid hormones, eicosanoids, PIP2", "Local + systemic communication"],
              ["Pigments / antioxidants", "\u03b2-carotene, vitamin E", "Vision precursor; radical quenching"],
              ["Protein anchors (PTMs)", "Palmitoyl, farnesyl, GPI", "Tether proteins to membranes"],
              ["Insulation / waterproofing", "Waxes, TAG depots", "Thermal + barrier function"],
            ]}
          />
          <Callout kind="tip" title="Exam anchor: what lipids share">
            ALL lipids share hydrophobicity (low water solubility). They do NOT all share: fatty acid chains (cholesterol lacks one), carboxylic acid groups (TAGs esterify them away), or polymeric structure (lipids are never true polymers).
          </Callout>
        </>
      ),
    },

    {
      id: 'fatty-acids',
      title: 'Fatty Acids: Structure, Saturation & Nomenclature',
      subtitle: 'Even-C, unbranched carboxylic acids with hydrocarbon tails',
      images: [
        { src: 'raw/lip_image10.png', alt: 'Saturated vs unsaturated fatty acid conformations', caption: 'Saturated FAs pack tightly; cis double bonds kink the chain.' },
        { src: 'raw/lip_image13.png', alt: 'Comparison of fatty acid chain saturations', caption: 'Chain length and degree of unsaturation determine melting point.' },
      ],
      content: (
        <>
          <p>
            A fatty acid is a <strong>carboxylic acid with a hydrocarbon chain of 4\u201336 carbons</strong>. Almost all naturally occurring fatty acids are <strong>unbranched</strong> and have an <strong>even number of carbons</strong> (because they are built two carbons at a time from acetyl-CoA).
          </p>
          <ul>
            <li><strong>Saturated:</strong> no C=C double bonds; straight chains pack tightly \u2192 high melting point (e.g., stearate 18:0).</li>
            <li><strong>Monounsaturated:</strong> one double bond (e.g., oleate 18:1\u0394<sup>9</sup>).</li>
            <li><strong>Polyunsaturated (PUFA):</strong> \u2265 2 double bonds; <em>cis</em> bonds kink the chain \u2192 low melting point (oils, fluidity).</li>
          </ul>
          <p><strong>Naming conventions:</strong></p>
          <ol>
            <li><strong>Carbon:double-bond notation</strong> — <code>16:0</code> = 16 carbons, 0 double bonds (palmitate). <code>18:1</code> = 18 carbons, 1 double bond.</li>
            <li><strong>\u0394-notation</strong> counts from the carboxyl (C1): <code>18:1\u0394<sup>9</sup></code> = double bond between C9 and C10 counting from the \u2013COOH end.</li>
            <li><strong>\u03c9-notation</strong> counts from the methyl end: \u03c9-3 (ALA, EPA, DHA — essential, fish/flax), \u03c9-6 (linoleic acid).</li>
          </ol>
          <Callout kind="warn" title="Exam trap: valid vs invalid FA names">
            Double-bond positions in \u0394-notation must be <strong>consistent with real biochemistry</strong>. "20:5(\u0394<sup>3,6,9,12,15</sup>)" is suspicious because natural PUFAs almost never have a \u03942 or \u03943 double bond in the \u03b1/\u03b2 position (those are reserved for catabolism intermediates). "16:1\u0394<sup>9</sup>" (palmitoleate) is a perfectly valid naturally occurring FA. Watch for first-double-bond positions \u2264 3 — usually a red flag.
          </Callout>
          <p>
            <strong>Essential fatty acids</strong> (ALA \u2014 \u03b1-linolenic, \u03c9-3; linoleic, \u03c9-6) cannot be synthesized by humans. Humans can convert ALA \u2192 EPA \u2192 DHA inefficiently, so dietary fatty fish / flax / walnuts matter for brain membranes and blood clotting regulation.
          </p>
          <svg viewBox="0 0 420 110" width="100%" style={{ maxWidth: 460, border: '1px solid #334155', borderRadius: 6, background: '#0b1220' }}>
            <text x="10" y="22" fill="#e2e8f0" fontSize="12">\u0394 counts from \u2013COOH (C1)</text>
            <text x="220" y="22" fill="#e2e8f0" fontSize="12">\u03c9 counts from CH\u2083 end</text>
            <line x1="10" y1="70" x2="410" y2="70" stroke="#64748b" strokeWidth="2" />
            <circle cx="15" cy="70" r="6" fill="#ef4444" />
            <text x="5" y="90" fill="#ef4444" fontSize="11">COOH (C1)</text>
            <circle cx="405" cy="70" r="6" fill="#22c55e" />
            <text x="370" y="90" fill="#22c55e" fontSize="11">CH\u2083 (\u03c9)</text>
            <text x="120" y="60" fill="#f59e0b" fontSize="11">\u03949</text>
            <line x1="125" y1="65" x2="135" y2="75" stroke="#f59e0b" strokeWidth="2" />
            <text x="310" y="60" fill="#60a5fa" fontSize="11">\u03c9-3</text>
          </svg>
        </>
      ),
    },

    {
      id: 'storage-fats',
      title: 'Why Fats Win for Long-Term Energy Storage',
      subtitle: 'Energy density, dehydration, packing',
      images: [],
      content: (
        <>
          <p>
            Fats dominate long-term storage for three reasons (a classic exam compare-contrast with glycogen/glucose):
          </p>
          <ol>
            <li><strong>Energy density:</strong> fatty acids are <em>more reduced</em> than carbohydrates, so oxidation yields more ATP per gram (~9 kcal/g vs ~4 kcal/g for carbs).</li>
            <li><strong>Dehydration (anhydrous storage):</strong> TAGs are stored without hydration shells. Glycogen drags ~2 g H\u2082O per gram \u2014 a huge mass penalty.</li>
            <li><strong>Packing:</strong> TAGs coalesce in lipid droplets, not tied up in hydrogen-bonded branched polymer networks.</li>
          </ol>
          <Table
            headers={["Feature", "Glucose / Glycogen", "Triacylglycerol"]}
            rows={[
              ["Oxidation state", "Partially oxidized", "Highly reduced"],
              ["Energy/gram", "~4 kcal/g", "~9 kcal/g"],
              ["Hydration", "~2 g H\u2082O per g glycogen", "Anhydrous"],
              ["Delivery speed", "Fast (minutes\u2013hours)", "Slow (days\u2013months)"],
              ["Use case", "Quick energy, brain/RBC fuel", "Long-term reserves, hibernation, migration"],
            ]}
          />
          <Callout kind="info" title="Why glycogen still matters">
            Glucose/glycogen is <strong>fast delivery</strong>, water-soluble, and usable anaerobically \u2014 indispensable for red blood cells (no mitochondria) and rapid muscular effort. Fats are the <strong>long-game</strong> depot.
          </Callout>
        </>
      ),
    },

    {
      id: 'tags-waxes',
      title: 'Triacylglycerols, Waxes & Trans Fats',
      subtitle: 'Esters of fatty acids with glycerol or long-chain alcohols',
      images: [],
      content: (
        <>
          <p>
            <strong>Triacylglycerols (TAGs)</strong> are three fatty acids esterified to glycerol. They are the body's primary storage lipid (adipose tissue). Solid TAGs = <em>fats</em>; liquid TAGs = <em>oils</em>. Because all three \u2013OH groups of glycerol are esterified, TAGs are even less polar than free FAs \u2014 they float on water and are insoluble.
          </p>
          <p>
            <strong>Waxes</strong> are esters of <strong>long-chain fatty acids with long-chain alcohols</strong> (not glycerol). They are extremely hydrophobic, have high melting points, and serve as: plankton metabolic fuel, skin/hair pliability, bird feather waterproofing, ivy/tropical-plant evaporation barriers, lotion/polish bases.
          </p>
          <Table
            headers={["Lipid", "Backbone", "FA count", "Role"]}
            rows={[
              ["Triacylglycerol", "Glycerol (3\u2013C)", "3", "Energy storage"],
              ["Wax", "Long-chain alcohol", "1", "Waterproofing, insulation"],
              ["Glycerophospholipid", "Glycerol-3-P", "2", "Membranes"],
              ["Sphingolipid", "Sphingosine", "1 (amide)", "Membranes, signaling"],
            ]}
          />
          <p>
            <strong>Trans fats</strong> form when polyunsaturated oils are <em>partially hydrogenated</em> industrially. The trans double bond allows the chain to adopt an <em>extended</em> (nearly linear) conformation, so trans FAs pack more regularly than their cis counterparts \u2014 behaving thermodynamically more like saturated FAs (higher MP, solid at RT). Trans fats raise LDL, lower HDL, and increase cardiovascular disease risk.
          </p>
          <Callout kind="danger" title="Why partial hydrogenation exists">
            Food manufacturers partially hydrogenate unsaturated oils to make margarines, shortenings, pie crusts, fried food batters \u2014 the trans-induced packing gives solidity and shelf life at the cost of cardiovascular harm.
          </Callout>
        </>
      ),
    },

    {
      id: 'gpl',
      title: 'Glycerophospholipids & Phosphatidylcholine',
      subtitle: 'The workhorse amphipathic membrane lipid',
      images: [],
      content: (
        <>
          <p>
            <strong>Glycerophospholipids (GPLs)</strong> are the primary lipids of cell membranes. Architecture: <em>L-glycerol-3-phosphate</em> esterified at C1 and C2 with two fatty acids, and the phosphate at C3 further esterified by an alcohol <strong>"head group"</strong>.
          </p>
          <ol>
            <li><strong>C1 of glycerol</strong> \u2192 typically a <em>saturated</em> fatty acid (ester bond).</li>
            <li><strong>C2 of glycerol</strong> \u2192 typically an <em>unsaturated</em> fatty acid (ester bond) \u2014 the kinks here maintain membrane fluidity.</li>
            <li><strong>C3 of glycerol</strong> \u2192 phosphate, which is further esterified to a polar head group alcohol.</li>
          </ol>
          <p>
            Head groups include: <strong>choline</strong> (PC), <strong>ethanolamine</strong> (PE), <strong>serine</strong> (PS, negatively charged), <strong>inositol</strong> (PI \u2014 signaling!), <strong>glycerol</strong> (PG), and cardiolipin (unique to inner mitochondrial membrane). The head group identity determines membrane surface properties, charge, and signaling function.
          </p>
          <p>
            <strong>Phosphatidylcholine (PC)</strong> is the major lipid of most eukaryotic membranes and egg yolk/soy (lecithin). Interestingly, many prokaryotes including <em>E. coli</em> cannot synthesize PC and build membranes from PE/PG instead.
          </p>
          <Callout kind="tip" title="Head group = surface identity">
            Different organisms and tissues tune membrane function by varying head-group composition. The inner mitochondrial membrane is cardiolipin-rich; plasma membranes are PC/PE/sphingolipid/cholesterol-rich; plant chloroplast membranes are galactolipid-rich.
          </Callout>
        </>
      ),
    },

    {
      id: 'sphingo',
      title: 'Sphingolipids, Glycosphingolipids & ABO Blood Groups',
      subtitle: 'Sphingosine backbone, amide-linked FA, glycosidic head',
      images: [],
      content: (
        <>
          <p>
            <strong>Sphingolipids</strong> resemble glycerophospholipids dimensionally but their backbone is <strong>sphingosine</strong>, a long-chain amino alcohol — <em>not glycerol</em>. A fatty acid is joined to sphingosine via an <strong>amide</strong> bond (not an ester), forming <em>ceramide</em>. The polar head group is attached to ceramide via a phosphodiester (sphingomyelin) or a glycosidic linkage (glycosphingolipids).
          </p>
          <Table
            headers={["Sphingolipid class", "Head group", "Location/role"]}
            rows={[
              ["Ceramide", "\u2013H (bare)", "Signaling precursor"],
              ["Sphingomyelin", "Phosphocholine", "Myelin sheaths, plasma membrane"],
              ["Cerebroside", "Single sugar (e.g., Gal)", "Neural tissue"],
              ["Globoside", "Neutral oligosaccharide", "Plasma membrane outer leaflet"],
              ["Ganglioside", "Oligosaccharide with sialic acid(s)", "Cell-recognition, blood groups"],
            ]}
          />
          <p>
            <strong>Glycosphingolipids sit on the outer leaflet</strong> of the plasma membrane (bilayer asymmetry!) and their sugar head groups encode cell-surface identity including ABO blood groups.
          </p>
          <ol>
            <li><strong>Type O</strong>: person lacks an active glycosyltransferase — only the H antigen (basic sugar backbone) is present.</li>
            <li><strong>Type A</strong>: glycosyltransferase adds <strong>N-acetylgalactosamine (GalNAc)</strong> onto H antigen.</li>
            <li><strong>Type B</strong>: glycosyltransferase adds <strong>galactose</strong> onto H antigen.</li>
            <li><strong>Type AB</strong>: both enzymes expressed \u2192 both antigens present.</li>
          </ol>
          <Callout kind="info" title="Why transfusion mismatch matters">
            Type-O individuals have anti-A and anti-B antibodies in serum (universal donor but restrictive recipient). The molecular basis is nothing more than which sugar a glycosyltransferase tacks onto a sphingolipid head group.
          </Callout>
        </>
      ),
    },

    {
      id: 'sterols',
      title: 'Sterols, Cholesterol & Steroid Hormones',
      subtitle: 'Four fused rings + hydroxyl = the planar membrane modulator',
      images: [],
      content: (
        <>
          <p>
            A <strong>sterol</strong> has the signature <em>steroid nucleus</em>: <strong>four fused rings</strong> (three 6-membered + one 5-membered — "ABCD"), a hydroxyl in the A-ring (the polar head), and various nonpolar side chains. The fused-ring core is essentially <strong>planar and rigid</strong>.
          </p>
          <p>
            <strong>Cholesterol</strong> is present in most eukaryotic plasma membranes (virtually absent from mitochondrial inner membranes and most bacteria). Its roles:
          </p>
          <ol>
            <li><strong>Modulates fluidity:</strong> at high T, cholesterol <em>restricts</em> FA motion (reduces fluidity); at low T, it <em>prevents tight packing</em> of FAs (prevents gelling). It is a "fluidity buffer."</li>
            <li><strong>Thickens the plasma membrane</strong> and reduces permeability to small polar molecules.</li>
            <li><strong>Concentrates in lipid rafts</strong> with sphingolipids \u2014 ordered microdomains that organize signaling proteins.</li>
            <li><strong>Precursor for steroid hormones</strong> (cortisol, aldosterone, testosterone, estrogen), bile acids, vitamin D.</li>
          </ol>
          <p>
            Mammals get cholesterol from two sources: (1) <strong>dietary</strong> uptake and (2) <strong>de novo synthesis</strong> in the liver. <strong>Steroid hormones</strong> are oxidized sterol derivatives that lack the long alkyl side chain of cholesterol \u2014 they are more polar than cholesterol but still poorly water-soluble, so they travel bound to serum proteins.
          </p>
          <Callout kind="tip" title="Rigidity = the superpower">
            Cholesterol's fused rings make it <em>rigid</em>. When it wedges between phospholipid tails, it prevents them from packing into a gel at cold temperatures AND prevents them from flopping too freely at warm temperatures. This "goldilocks" fluidity behavior is a classic exam short-answer target.
          </Callout>
        </>
      ),
    },

    {
      id: 'micelle-bilayer',
      title: 'Micelles, Bilayers & Vesicles',
      subtitle: 'Three geometries amphipathic lipids spontaneously adopt',
      images: [],
      content: (
        <>
          <p>
            Amphipathic lipids above their <strong>critical micelle concentration (CMC)</strong> spontaneously self-assemble to bury hydrophobic tails away from water. The geometry depends on the molecule's <strong>shape</strong> (head-to-tail ratio):
          </p>
          <ol>
            <li><strong>Micelle</strong> (sphere of a monolayer): forms when the head is <em>bigger</em> than the tail \u2014 e.g., fatty acids, SDS, lysophospholipids. Interior is essentially waterless.</li>
            <li><strong>Bilayer</strong> (two leaflets): forms when head and tail cross-sectional areas are similar \u2014 e.g., phospholipids with two FA tails. Edges are energetically unfavorable.</li>
            <li><strong>Vesicle / liposome</strong>: a bilayer that curls on itself to eliminate edges \u2014 encloses an aqueous cavity, fuses readily with other membranes, and is a popular drug-delivery vehicle.</li>
          </ol>
          <svg viewBox="0 0 420 140" width="100%" style={{ maxWidth: 520, border: '1px solid #334155', borderRadius: 6, background: '#0b1220' }}>
            <text x="30" y="18" fill="#e2e8f0" fontSize="12">Micelle</text>
            <circle cx="60" cy="75" r="35" fill="none" stroke="#60a5fa" strokeWidth="2" />
            <circle cx="60" cy="75" r="6" fill="#22c55e" />
            <text x="170" y="18" fill="#e2e8f0" fontSize="12">Bilayer</text>
            <rect x="130" y="55" width="120" height="40" fill="none" stroke="#60a5fa" strokeWidth="2" />
            <line x1="130" y1="75" x2="250" y2="75" stroke="#f59e0b" strokeDasharray="3 3" />
            <text x="320" y="18" fill="#e2e8f0" fontSize="12">Vesicle</text>
            <circle cx="355" cy="75" r="38" fill="none" stroke="#60a5fa" strokeWidth="2" />
            <circle cx="355" cy="75" r="22" fill="none" stroke="#60a5fa" strokeWidth="2" />
            <circle cx="355" cy="75" r="4" fill="#22c55e" />
          </svg>
          <Callout kind="info" title="Why bilayers are preferred by cells">
            Phospholipids have two fatty acid tails, giving them a roughly cylindrical shape — the geometry that minimizes energy in a bilayer, not a micelle. Spontaneous closure into vesicles eliminates the edge penalty entirely.
          </Callout>
        </>
      ),
    },

    {
      id: 'membrane-arch',
      title: 'Membrane Architecture: Fluid Mosaic & Asymmetry',
      subtitle: 'Lehninger fig 11\u20133 in one block',
      images: [
        { src: 'raw/mem_image9.jpeg', alt: 'Fluid mosaic model of the plasma membrane', caption: 'Fluid mosaic: integral proteins float in a 2D sea of lipids; carbohydrates sit on the extracellular face.' },
      ],
      content: (
        <>
          <p>
            The <strong>fluid mosaic model</strong> (Singer & Nicolson, 1972) describes membranes as a <em>two-dimensional fluid</em> of phospholipids in which integral proteins float laterally, held by hydrophobic interactions with nonpolar amino acid side chains. Lipids and proteins <strong>diffuse freely in the plane</strong>, but <strong>transverse flipping is restricted</strong>.
          </p>
          <p><strong>Four architectural facts:</strong></p>
          <ol>
            <li><strong>Asymmetric bilayer:</strong> the two leaflets differ. Outer leaflet: PC, sphingomyelin, glycosphingolipids. Inner leaflet: PE, PS (negative), PI. This asymmetry is <em>actively maintained</em> by flippases/floppases and is used in signaling (e.g., PS flip to the outer leaflet = "eat me" apoptosis signal).</li>
            <li><strong>Carbohydrates face outward:</strong> glycoproteins and glycolipids expose sugar chains only on the extracellular surface \u2014 the glycocalyx.</li>
            <li><strong>Lipid rafts:</strong> ordered microdomains enriched in cholesterol + sphingolipids + GPI-anchored proteins. Rafts are <em>thicker</em>, <em>less fluid</em>, and concentrate signaling machinery.</li>
            <li><strong>Composition varies by organelle:</strong> PM is cholesterol-rich; inner mito membrane is cardiolipin-rich; chloroplasts are galactolipid-rich.</li>
          </ol>
          <Callout kind="tip" title="Lipid raft signature">
            Rafts are high in cholesterol + sphingolipids + saturated-tail lipids + GPI anchors. They are more ordered (thicker) and concentrate many signaling receptors. Detergent resistance is their classic biochemical signature.
          </Callout>
        </>
      ),
    },

    {
      id: 'membrane-proteins',
      title: 'Membrane Proteins & Lipid Dynamics',
      subtitle: 'Peripheral, integral, amphitropic \u2014 and the flip/flop problem',
      images: [
        { src: 'raw/mem_image15.jpeg', alt: '7-helix transmembrane protein in a lipid bilayer', caption: '7-TM (G-protein coupled receptor) threading seven \u03b1-helices through the bilayer.' },
      ],
      content: (
        <>
          <p>Membrane proteins are operationally classified by how they associate with the bilayer:</p>
          <Table
            headers={["Type", "Association", "How to release"]}
            rows={[
              ["Peripheral", "Electrostatic / H-bond to head groups", "Change pH/ionic strength, add Ca\u00b2\u207a chelator or urea"],
              ["Integral", "Hydrophobic core of bilayer (1\u20137+ TM helices or \u03b2-barrel)", "Detergents (disrupt hydrophobic interactions)"],
              ["Lipid-linked", "Covalent lipid anchor (GPI, palmitoyl, myristoyl, farnesyl/geranylgeranyl)", "GPI-anchored: phospholipase C. Others: cleave the anchor"],
              ["Amphitropic", "Reversibly associates depending on regulation", "Remove regulatory modification (e.g., depalmitoylation)"],
            ]}
          />
          <p>
            <strong>Lipid-linked proteins</strong> illustrate how lipids can act as post-translational modifications: <em>N-myristoyl</em> on an N-terminal Gly, <em>palmitoyl</em> as a thioester on Cys, <em>farnesyl/geranylgeranyl</em> (isoprenoids) on C-terminal Cys, and <strong>GPI anchors</strong> (always extracellular face).
          </p>
          <p><strong>Lipid motion comes in two flavors:</strong></p>
          <ol>
            <li><strong>Lateral diffusion</strong> (within a leaflet): <em>very fast</em>, ~10\u207b\u2078 cm\u00b2/s, no catalysis needed \u2014 a lipid crosses a bacterium in seconds.</li>
            <li><strong>Transverse diffusion / "flip-flop"</strong> (between leaflets): <em>very slow</em> uncatalyzed \u2014 the charged/polar head must traverse the hydrophobic tail region, a huge energetic barrier. Half-time can be hours to days.</li>
          </ol>
          <p><strong>Three enzymes catalyze transverse motion:</strong></p>
          <ul>
            <li><strong>Flippase:</strong> moves lipids <em>inward</em> (outer \u2192 inner leaflet), <strong>ATP-dependent</strong> — e.g., brings PS/PE to the cytosolic face.</li>
            <li><strong>Floppase:</strong> moves lipids <em>outward</em> (inner \u2192 outer), <strong>ATP-dependent</strong> — ABC-family transporters.</li>
            <li><strong>Scramblase:</strong> <em>bidirectional</em>, <strong>ATP-independent</strong>; activated by Ca\u00b2\u207a, collapses asymmetry during apoptosis/platelet activation.</li>
          </ul>
          <Callout kind="warn" title="Why uncatalyzed flip is painfully slow">
            The polar/charged head group must cross the hydrophobic bilayer core — an enormous desolvation penalty. Lateral diffusion needs no such step, which is why lateral \u226b transverse by orders of magnitude.
          </Callout>
        </>
      ),
    },

    {
      id: 'fa-mobilize',
      title: 'FA Mobilization: Lipase, Albumin & Chylomicrons',
      subtitle: 'Getting hydrophobic fuel from storage depot to mitochondrion',
      images: [],
      content: (
        <>
          <p>
            ~83% of human energy comes from fat pulled from three reservoirs: <strong>dietary intake</strong>, <strong>stored lipid droplets</strong> in adipocytes, and <strong>lipids synthesized in one organ</strong> (liver) and <strong>transported to another</strong>. The central engineering problem: <em>hydrophobic cargo in an aqueous bloodstream</em>. Solutions:
          </p>
          <ol>
            <li><strong>Dietary lipids \u2192 chylomicrons.</strong> Enterocytes (absorptive cells of the small intestine) package dietary TAGs (~90%), phospholipids, cholesterol, and apolipoproteins into <strong>chylomicrons</strong> — lipoprotein particles that traffic through lymph \u2192 bloodstream \u2192 target tissues.</li>
            <li><strong>Hormonal release from adipose.</strong> Low blood glucose \u2192 glucagon \u2192 binds adipocyte GPCR \u2192 ATP \u2192 cAMP \u2192 PKA activation \u2192 phosphorylates <strong>hormone-sensitive lipase (HSL)</strong> \u2192 HSL + ATGL + MGL hydrolyze TAG \u2192 <strong>3 free fatty acids + glycerol</strong>.</li>
            <li><strong>Free FAs travel on serum albumin.</strong> Released FAs are immediately bound by <strong>serum albumin</strong> (the most abundant plasma protein, ~60% of plasma protein), which ferries them to the liver and peripheral tissues.</li>
            <li><strong>Glycerol</strong> returns to the liver for gluconeogenesis (converted to DHAP via glycerol kinase \u2192 glycerol-3-P \u2192 DHAP).</li>
          </ol>
          <Table
            headers={["Carrier", "Cargo", "Route"]}
            rows={[
              ["Chylomicron", "Dietary TAGs/cholesterol", "Enterocyte \u2192 lymph \u2192 blood \u2192 tissue"],
              ["VLDL", "Liver-synthesized TAGs", "Liver \u2192 peripheral tissues"],
              ["LDL", "Cholesterol (delivery)", "Liver \u2192 peripheral tissues"],
              ["HDL", "Cholesterol (reverse transport)", "Periphery \u2192 liver"],
              ["Serum albumin", "Free fatty acids (from HSL)", "Adipose \u2192 liver / muscle"],
            ]}
          />
          <Callout kind="info" title="Exam angle on glucagon\u2192HSL">
            The signal cascade order — low glucose \u2192 glucagon \u2192 GPCR \u2192 adenylate cyclase \u2192 cAMP \u2192 PKA \u2192 HSL phosphorylation \u2192 TAG \u2192 FA + glycerol — is a favorite mechanism prompt.
          </Callout>
        </>
      ),
    },

    {
      id: 'fa-activation',
      title: 'FA Activation & the Carnitine Shuttle',
      subtitle: 'Priming with CoA, then threading into the matrix',
      images: [],
      content: (
        <>
          <p>
            Before a fatty acid can be oxidized, it must be <strong>activated</strong> (tagged with CoA) and then — if long — <strong>shuttled</strong> across the impermeable inner mitochondrial membrane.
          </p>
          <ol>
            <li><strong>Activation (cytosol / outer mito membrane)</strong>: catalyzed by <em>acyl-CoA synthetase</em>. Net reaction: <br /><code>Fatty acid + CoA + ATP \u2192 Fatty acyl-CoA + AMP + 2 P\u1d62</code><br />Note: ATP is cleaved to <strong>AMP + PP\u1d62</strong>, and PP\u1d62 is hydrolyzed to 2 P\u1d62 — costing the equivalent of <strong>2 ATP</strong> (two high-energy phosphoanhydride bonds). This drives the thioester formation essentially irreversibly.</li>
            <li><strong>Short FAs (&lt; 12 C) diffuse freely</strong> across the mitochondrial membranes and are activated inside the matrix.</li>
            <li><strong>Long FAs (\u2265 12 C) require the carnitine shuttle</strong>:
              <ul>
                <li><strong>CPT-I</strong> (carnitine palmitoyltransferase I, outer mito membrane): swaps CoA for carnitine \u2192 acyl-carnitine.</li>
                <li><strong>Translocase</strong>: antiporter in the inner membrane — acyl-carnitine in, free carnitine out.</li>
                <li><strong>CPT-II</strong> (inner face): swaps carnitine back for matrix CoA \u2192 regenerates acyl-CoA inside the matrix.</li>
              </ul>
            </li>
          </ol>
          <Callout kind="warn" title="CPT-I is the gatekeeper">
            CPT-I is inhibited by <strong>malonyl-CoA</strong> (the committed intermediate of FA synthesis). This reciprocal regulation prevents simultaneous synthesis and breakdown: if cells are building FAs, they are NOT burning them. Defects in CPT or the carnitine transporter produce classic FA oxidation disorders screened in newborns.
          </Callout>
          <svg viewBox="0 0 460 140" width="100%" style={{ maxWidth: 540, border: '1px solid #334155', borderRadius: 6, background: '#0b1220' }}>
            <text x="10" y="20" fill="#e2e8f0" fontSize="12">Cytosol</text>
            <text x="205" y="20" fill="#e2e8f0" fontSize="12">IMS</text>
            <text x="360" y="20" fill="#e2e8f0" fontSize="12">Matrix</text>
            <line x1="150" y1="30" x2="150" y2="130" stroke="#64748b" strokeWidth="2" />
            <line x1="310" y1="30" x2="310" y2="130" stroke="#64748b" strokeWidth="2" />
            <text x="25" y="75" fill="#22c55e" fontSize="11">Acyl-CoA</text>
            <text x="170" y="55" fill="#f59e0b" fontSize="11">CPT-I</text>
            <text x="170" y="90" fill="#60a5fa" fontSize="11">Acyl-carnitine</text>
            <text x="240" y="75" fill="#f59e0b" fontSize="11">Translocase</text>
            <text x="330" y="55" fill="#f59e0b" fontSize="11">CPT-II</text>
            <text x="330" y="90" fill="#22c55e" fontSize="11">Acyl-CoA</text>
            <text x="335" y="115" fill="#94a3b8" fontSize="10">(\u2192 \u03b2-ox)</text>
          </svg>
        </>
      ),
    },

    {
      id: 'beta-ox',
      title: '\u03b2-Oxidation: The 4-Step Spiral',
      subtitle: 'Oxidize, hydrate, oxidize, cleave \u2014 repeat',
      images: [],
      content: (
        <>
          <p>
            Once acyl-CoA is in the mitochondrial matrix, it enters the <strong>\u03b2-oxidation spiral</strong>: a repeating four-step cycle that shortens the chain by <strong>two carbons per round</strong>, each round releasing one <strong>acetyl-CoA</strong>, one <strong>FADH\u2082</strong>, and one <strong>NADH</strong>. The name: oxidation happens at the \u03b2-carbon (C3, two carbons in from the thioester).
          </p>
          <Table
            headers={["Step", "Enzyme", "Reaction type", "Product"]}
            rows={[
              ["1", "Acyl-CoA dehydrogenase (AD)", "Oxidation \u2014 FAD \u2192 FADH\u2082", "trans-\u03942-enoyl-CoA (double bond between C\u03b1 and C\u03b2)"],
              ["2", "Enoyl-CoA hydratase (ECH)", "Hydration \u2014 add H\u2082O across the double bond", "L-3-hydroxyacyl-CoA (\u2013OH on C\u03b2)"],
              ["3", "L-3-hydroxyacyl-CoA dehydrogenase (HAD)", "Oxidation \u2014 NAD\u207a \u2192 NADH", "3-ketoacyl-CoA (ketone on C\u03b2)"],
              ["4", "Thiolase (KT)", "Thiolysis \u2014 attack by a second CoA-SH", "Acetyl-CoA + acyl-CoA (shortened by 2 C)"],
            ]}
          />
          <p><strong>Mnemonic for the 4 steps:</strong> <em>"Oxidize, Hydrate, Oxidize, Cleave"</em> — or <em>"A-E-L-T"</em> (Acyl-CoA DH \u2192 Enoyl-CoA hydratase \u2192 L-hydroxyacyl-CoA DH \u2192 Thiolase).</p>
          <ol>
            <li><strong>Step 1 — oxidation (FAD):</strong> acyl-CoA dehydrogenase removes two H atoms from C\u03b1 and C\u03b2, generating a <em>trans-\u03942</em> double bond. FAD \u2192 FADH\u2082. Electrons feed ETC via ETF \u2192 Q.</li>
            <li><strong>Step 2 — hydration:</strong> enoyl-CoA hydratase adds water stereospecifically \u2192 L-3-hydroxyacyl-CoA.</li>
            <li><strong>Step 3 — oxidation (NAD\u207a):</strong> the 3-OH is oxidized to a 3-ketone by L-3-hydroxyacyl-CoA dehydrogenase. NAD\u207a \u2192 NADH.</li>
            <li><strong>Step 4 — thiolysis:</strong> thiolase cleaves the C\u03b1\u2013C\u03b2 bond with a nucleophilic CoA-SH, releasing <em>acetyl-CoA</em> and a fatty acyl-CoA two carbons shorter, which re-enters step 1.</li>
          </ol>
          <p><strong>Counting rounds for an even-C saturated FA:</strong></p>
          <ul>
            <li>Number of rounds = <strong>(n<sub>C</sub>/2) \u2013 1</strong></li>
            <li>Number of acetyl-CoA produced = <strong>n<sub>C</sub>/2</strong></li>
            <li>Example \u2014 palmitate (C16): <strong>7 rounds</strong>, <strong>8 acetyl-CoA</strong>, <strong>7 FADH\u2082</strong>, <strong>7 NADH</strong>.</li>
          </ul>
          <svg viewBox="0 0 460 170" width="100%" style={{ maxWidth: 560, border: '1px solid #334155', borderRadius: 6, background: '#0b1220' }}>
            <text x="8" y="18" fill="#e2e8f0" fontSize="12">Acyl-CoA (n C)</text>
            <text x="8" y="40" fill="#f59e0b" fontSize="11">1) Acyl-CoA DH \u2192 FADH\u2082</text>
            <text x="8" y="62" fill="#e2e8f0" fontSize="12">trans-\u03942-enoyl-CoA</text>
            <text x="8" y="84" fill="#f59e0b" fontSize="11">2) Enoyl-CoA hydratase \u2192 H\u2082O in</text>
            <text x="8" y="106" fill="#e2e8f0" fontSize="12">L-3-hydroxyacyl-CoA</text>
            <text x="8" y="128" fill="#f59e0b" fontSize="11">3) L-3-hydroxyacyl-CoA DH \u2192 NADH</text>
            <text x="8" y="150" fill="#e2e8f0" fontSize="12">3-ketoacyl-CoA</text>
            <text x="260" y="40" fill="#f59e0b" fontSize="11">4) Thiolase + CoA-SH</text>
            <text x="260" y="62" fill="#22c55e" fontSize="12">\u2192 Acetyl-CoA (2 C)</text>
            <text x="260" y="84" fill="#60a5fa" fontSize="12">\u2192 Acyl-CoA (n\u20132 C)</text>
            <text x="260" y="110" fill="#94a3b8" fontSize="11">Repeat: (n/2) \u2013 1 rounds total</text>
            <text x="260" y="132" fill="#94a3b8" fontSize="11">Palmitate C16: 7 rounds, 8 acetyl-CoA</text>
          </svg>
          <Callout kind="tip" title="Energy yield from palmitate">
            7 FADH\u2082 (\u2248 1.5 ATP each) + 7 NADH (\u2248 2.5 ATP each) + 8 acetyl-CoA \u2192 each into CAC yields 3 NADH + 1 FADH\u2082 + 1 GTP. Subtract 2 ATP-equivalents for the initial activation step. Net \u2248 <strong>106 ATP per palmitate</strong> — a 4\u00d7 advantage over glucose by mass.
          </Callout>
          <Callout kind="warn" title="MCAD deficiency & SIDS">
            Medium-chain acyl-CoA dehydrogenase deficiency (MCADD) is the most common FA oxidation disorder, linked to {'>'}10% of SIDS cases. Newborn blood-spot screening detects it along with carnitine transport defects and {'>'}10 other disorders. Treatment: avoid fasting, supplement carnitine, low-fat diet, IV glucose for hypoglycemic episodes.
          </Callout>
        </>
      ),
    },
  ],

  keyReview: {
    vocab: [
      { term: 'Amphipathic', def: 'Having both hydrophilic (polar) and hydrophobic (nonpolar) regions in the same molecule.', tag: 'structure', tagColor: 'blue' },
      { term: 'Hydrocarbon', def: 'Organic compound composed only of C and H; the nonpolar backbone of fatty acids.', tag: 'structure', tagColor: 'blue' },
      { term: 'Saturated FA', def: 'Fatty acid with no C=C double bonds; straight, tightly packing, high MP.', tag: 'FA', tagColor: 'orange' },
      { term: 'Unsaturated FA', def: 'Fatty acid with \u22651 C=C; cis bonds kink the chain and lower MP.', tag: 'FA', tagColor: 'orange' },
      { term: 'Polyunsaturated', def: 'Fatty acid with 2+ double bonds; common in oils and fish.', tag: 'FA', tagColor: 'orange' },
      { term: '\u0394-notation', def: 'Position of C=C counted from the carboxyl carbon (C1).', tag: 'naming', tagColor: 'purple' },
      { term: '\u03c9-3 / \u03c9-6', def: 'Position of the first double bond counted from the methyl (\u03c9) end. Essential dietary FAs.', tag: 'naming', tagColor: 'purple' },
      { term: 'Trans fatty acid', def: 'FA with a trans double bond; extended conformation \u2192 packs like saturated \u2192 CVD risk.', tag: 'FA', tagColor: 'orange' },
      { term: 'Triacylglycerol (TAG)', def: 'Three FAs esterified to glycerol; main energy-storage lipid.', tag: 'storage', tagColor: 'green' },
      { term: 'Wax', def: 'Ester of a long-chain FA with a long-chain alcohol; waterproofing, protection.', tag: 'storage', tagColor: 'green' },
      { term: 'Glycerophospholipid', def: 'Two FAs + phosphate + head group on glycerol; core membrane lipid.', tag: 'membrane', tagColor: 'teal' },
      { term: 'Phosphatidylcholine (PC)', def: 'GPL with choline head group; major lipid of eukaryotic membranes.', tag: 'membrane', tagColor: 'teal' },
      { term: 'Sphingosine', def: 'Long-chain amino alcohol; backbone of all sphingolipids (NOT glycerol).', tag: 'membrane', tagColor: 'teal' },
      { term: 'Sphingomyelin', def: 'Ceramide + phosphocholine; phosphodiester head group; abundant in myelin.', tag: 'membrane', tagColor: 'teal' },
      { term: 'Glycosphingolipid', def: 'Sphingolipid with sugar head group via glycosidic bond; outer leaflet.', tag: 'membrane', tagColor: 'teal' },
      { term: 'Ganglioside', def: 'Glycosphingolipid with sialic-acid-containing oligosaccharide; blood groups & cell recognition.', tag: 'membrane', tagColor: 'teal' },
      { term: 'Sterol / cholesterol', def: 'Four fused rings + A-ring \u2013OH; modulates fluidity and thickens PM.', tag: 'membrane', tagColor: 'teal' },
      { term: 'Steroid hormone', def: 'Oxidized sterol derivative lacking the cholesterol alkyl tail; more polar; carried on plasma proteins.', tag: 'signaling', tagColor: 'pink' },
      { term: 'Lipid raft', def: 'Cholesterol- and sphingolipid-rich ordered microdomain; concentrates signaling proteins.', tag: 'membrane', tagColor: 'teal' },
      { term: 'Fluid mosaic model', def: 'Bilayer as 2D fluid of lipids with proteins floating; lateral diffusion fast, transverse slow.', tag: 'membrane', tagColor: 'teal' },
      { term: 'Bilayer asymmetry', def: 'The two leaflets differ in lipid composition; maintained by flippases/floppases.', tag: 'membrane', tagColor: 'teal' },
      { term: 'Peripheral protein', def: 'Non-covalent association with membrane surface; releasable by pH/ionic strength changes.', tag: 'protein', tagColor: 'indigo' },
      { term: 'Integral protein', def: 'Embedded in bilayer via hydrophobic TM regions; detergent needed to extract.', tag: 'protein', tagColor: 'indigo' },
      { term: 'Amphitropic protein', def: 'Reversibly associates with membrane based on regulation (e.g., palmitoylation).', tag: 'protein', tagColor: 'indigo' },
      { term: 'GPI anchor', def: 'Glycosyl phosphatidylinositol lipid anchor on extracellular leaflet; releasable by PLC.', tag: 'protein', tagColor: 'indigo' },
      { term: 'Flippase', def: 'ATP-dependent; moves lipids outer \u2192 inner leaflet.', tag: 'dynamics', tagColor: 'amber' },
      { term: 'Floppase', def: 'ATP-dependent; moves lipids inner \u2192 outer leaflet (ABC family).', tag: 'dynamics', tagColor: 'amber' },
      { term: 'Scramblase', def: 'ATP-independent bidirectional; Ca\u00b2\u207a-activated; collapses asymmetry in apoptosis.', tag: 'dynamics', tagColor: 'amber' },
      { term: 'Chylomicron', def: 'Lipoprotein particle carrying dietary TAGs from enterocyte \u2192 lymph \u2192 blood.', tag: 'transport', tagColor: 'red' },
      { term: 'Serum albumin', def: 'Most abundant plasma protein; escorts free FAs in the bloodstream.', tag: 'transport', tagColor: 'red' },
      { term: 'HSL / TAG lipase', def: 'Hormone-sensitive lipase; PKA-activated; cleaves TAGs into FA + glycerol.', tag: 'catabolism', tagColor: 'rose' },
      { term: 'Acyl-CoA', def: 'Activated fatty acid (FA-CoA thioester); formed by acyl-CoA synthetase at cost of 2 ATP.', tag: 'catabolism', tagColor: 'rose' },
      { term: 'Carnitine shuttle', def: 'CPT-I / translocase / CPT-II system ferrying long acyl chains into the mitochondrial matrix.', tag: 'catabolism', tagColor: 'rose' },
      { term: '\u03b2-oxidation', def: '4-step mitochondrial spiral: oxidize (FAD), hydrate, oxidize (NAD\u207a), thiolysis \u2192 acetyl-CoA.', tag: 'catabolism', tagColor: 'rose' },
    ],
    laws: [
      { name: 'Hydrophobicity is the only universal lipid property', desc: 'Lipids need not share a fatty acid, a COOH, or a polymeric structure \u2014 only low water solubility.' },
      { name: 'Even-C unbranched rule', desc: 'Natural FAs are almost always even-numbered and unbranched (built 2 C at a time from acetyl-CoA).' },
      { name: 'Cis double bonds kink chains', desc: 'Each cis kink lowers melting point and packing efficiency; trans bonds extend the chain like saturated FAs.' },
      { name: 'Fats beat carbs for storage', desc: 'More reduced \u2192 more ATP/gram; anhydrous \u2192 no mass penalty; dense packing \u2192 more energy per volume.' },
      { name: 'Head group \u2192 surface identity', desc: 'Membrane function is tuned by head group composition: cardiolipin in inner mito, PC outer leaflet of PM, etc.' },
      { name: 'Asymmetry is actively maintained', desc: 'Flippases/floppases (ATP) create and sustain leaflet asymmetry; scramblases collapse it as a signal.' },
      { name: 'Lateral \u226b Transverse', desc: 'Lipids diffuse fast within a leaflet (\u03bcs) but flip-flop extremely slowly across (hours\u2013days) without enzymes.' },
      { name: 'CPT-I is the gate', desc: 'Malonyl-CoA inhibits CPT-I \u2014 ensures FA synthesis and FA oxidation do not run simultaneously.' },
      { name: '\u03b2-ox rounds formula', desc: 'Rounds = (n_C / 2) \u2013 1; acetyl-CoA count = n_C / 2. Palmitate C16 = 7 rounds, 8 acetyl-CoA.' },
    ],
    methods: [
      { name: 'FA \u0394-notation decoder', expand: 'Carbons:DoubleBonds(\u0394positions)', desc: 'e.g., 18:2\u0394\u2079,\u00b9\u00b2 = 18 C, 2 double bonds between C9\u2013C10 and C12\u2013C13, both counted from the COOH.' },
      { name: '\u03c9-naming quick map', expand: 'Count from the methyl end', desc: '\u03c9-3 = first C=C is 3 C from CH\u2083 end. Common \u03c9-3: ALA, EPA, DHA. Essential dietary FAs.' },
      { name: 'Why-fat-wins triad', expand: 'Energy, Dehydration, Packing', desc: 'Memorize these three words to answer any "why are fats better than carbs?" short answer.' },
      { name: 'Membrane protein 3-class test', expand: 'Detergent? pH? Lipase?', desc: 'Integral needs detergent. Peripheral releases with pH/ionic strength. GPI-anchored releases with PLC.' },
      { name: 'Flippase/floppase/scramblase', expand: 'In / Out / Both', desc: 'Flippase \u2192 IN (ATP). Floppase \u2192 OUT (ATP). Scramblase \u2192 BOTH (no ATP, Ca\u00b2\u207a-triggered).' },
      { name: '\u03b2-oxidation 4-step mnemonic', expand: 'Oxidize \u2014 Hydrate \u2014 Oxidize \u2014 Cleave', desc: 'AD (FADH\u2082) \u2192 ECH (add H\u2082O) \u2192 HAD (NADH) \u2192 KT (thiolysis with CoA \u2192 acetyl-CoA + shorter acyl-CoA).' },
    ],
    diagrams: [],
  },

  questions: [
    {
      q: 'Which of the following is the ONLY property shared by ALL lipids?',
      type: 'mcq',
      choices: [
        'A long hydrocarbon chain',
        'A carboxylic acid group',
        'Conjugated double bonds',
        'Low solubility in water (hydrophobicity)',
      ],
      correct: 3,
      explanation: 'Lipids are defined by poor water solubility alone. Steroids have no long chain, TAGs esterify away the COOH, and most lipids lack conjugated bonds. Only hydrophobicity is universal.',
      difficulty: 'E',
      chapter: 'Lipids & Membranes',
    },
    {
      q: 'A student names a fatty acid "20:5(\u0394\u00b3,\u2076,\u2079,\u00b9\u00b2,\u00b9\u2075)". What is the MOST problematic feature of this name?',
      type: 'mcq',
      choices: [
        'The total number of carbons (20) is odd and therefore impossible',
        'A \u03943 double bond is extremely unusual in natural FAs \u2014 positions near the carboxyl are reserved for catabolic intermediates',
        'A 5-double-bond PUFA cannot biologically exist',
        'The \u0394-notation is always written from the methyl end',
      ],
      correct: 1,
      explanation: 'Natural PUFAs almost never place a double bond at \u03942 or \u03943 (those appear only transiently as \u03b2-oxidation intermediates). 20 is even (not odd), 20:5 PUFAs exist (EPA is 20:5\u03945,8,11,14,17), and \u0394 counts from the carboxyl.',
      difficulty: 'H',
      chapter: 'Lipids & Membranes',
    },
    {
      q: 'Which fatty acid is a legitimate naturally occurring molecule?',
      type: 'mcq',
      choices: [
        '17:1\u0394\u2079 (odd-C)',
        '16:1\u0394\u2079 (palmitoleate)',
        '18:3\u0394\u00b2,\u2075,\u2078',
        '12:4\u0394\u00b9,\u00b3,\u2075,\u2077',
      ],
      correct: 1,
      explanation: 'Palmitoleate (16:1\u03949) is a classic naturally occurring monounsaturated FA. Odd-C FAs are rare, and \u0394 positions starting at \u03941 or \u03942 in PUFAs are not typical natural configurations.',
      difficulty: 'M',
      chapter: 'Lipids & Membranes',
    },
    {
      q: 'Which of the following BEST explains why triacylglycerols are a more efficient long-term energy store than glycogen?',
      type: 'mcq',
      choices: [
        'TAGs hydrolyze faster than glycogen',
        'TAGs are more oxidized than glycogen',
        'TAGs are stored anhydrously and their carbons are more reduced \u2014 more energy per gram and no water-mass penalty',
        'TAGs can be used directly for anaerobic glycolysis',
      ],
      correct: 2,
      explanation: 'Fats are stored anhydrously (glycogen drags ~2 g H\u2082O per gram) and their C atoms are more reduced than sugar C atoms, giving ~9 kcal/g vs ~4 kcal/g. TAGs cannot be used anaerobically; they provide slow, long-term fuel.',
      difficulty: 'M',
      chapter: 'Lipids & Membranes',
    },
    {
      q: 'Omega-3 fatty acids include all of the following EXCEPT:',
      type: 'mcq',
      choices: [
        'ALA (\u03b1-linolenic acid) from flaxseed',
        'EPA from fatty fish',
        'DHA from fatty fish',
        'Linoleic acid (18:2\u0394\u2079,\u00b9\u00b2)',
      ],
      correct: 3,
      explanation: 'Linoleic acid is an \u03c9-6 fatty acid (first C=C is 6 carbons from the methyl end). ALA, EPA, and DHA are \u03c9-3. All four are essential in diet; humans convert ALA \u2192 EPA/DHA inefficiently.',
      difficulty: 'M',
      chapter: 'Lipids & Membranes',
    },
    {
      q: 'How does cholesterol affect membrane fluidity?',
      type: 'mcq',
      choices: [
        'It always increases fluidity by inserting space between phospholipid tails',
        'It always decreases fluidity by rigidifying the bilayer',
        'At high T it decreases fluidity by restricting FA motion; at low T it increases fluidity by preventing tight packing \u2014 a fluidity buffer',
        'It has no effect on fluidity; only on permeability',
      ],
      correct: 2,
      explanation: 'Cholesterol\u2019s rigid fused rings act as a fluidity buffer: above the phase transition they restrict acyl chain motion (less fluid), below the phase transition they prevent tight crystalline packing (more fluid).',
      difficulty: 'H',
      chapter: 'Lipids & Membranes',
    },
    {
      q: 'Which set of features BEST describes lipid rafts?',
      type: 'mcq',
      choices: [
        'PE/PS enriched, cholesterol-poor, highly fluid, thin',
        'Cholesterol + sphingolipid enriched, saturated-tail lipids, thicker, more ordered, concentrate GPI-anchored signaling proteins',
        'Transient clusters of unsaturated FAs on the inner leaflet',
        'Carbohydrate-only patches on the outer leaflet',
      ],
      correct: 1,
      explanation: 'Lipid rafts are defined by their cholesterol and sphingolipid enrichment, more ordered (thicker) structure, detergent resistance, and their tendency to concentrate GPI-anchored and other signaling proteins.',
      difficulty: 'M',
      chapter: 'Lipids & Membranes',
    },
    {
      q: 'An individual with blood type A has a glycosyltransferase that adds which sugar to the H antigen on glycosphingolipid head groups?',
      type: 'mcq',
      choices: [
        'Galactose',
        'N-acetylgalactosamine (GalNAc)',
        'Glucose',
        'Sialic acid',
      ],
      correct: 1,
      explanation: 'Blood type A = GalNAc added to H antigen. Blood type B = galactose added. Type O has no active transferase (just H antigen). Type AB has both enzymes.',
      difficulty: 'M',
      chapter: 'Lipids & Membranes',
    },
    {
      q: 'Which enzyme moves phospholipids from the outer leaflet to the inner leaflet, requires ATP, and is responsible for maintaining PS on the cytosolic face?',
      type: 'mcq',
      choices: [
        'Floppase',
        'Scramblase',
        'Flippase',
        'Phospholipase C',
      ],
      correct: 2,
      explanation: 'Flippases (ATP-dependent) move lipids outer \u2192 inner. Floppases (ATP) move inner \u2192 outer. Scramblases are ATP-independent and bidirectional, activated by Ca\u00b2\u207a to collapse asymmetry during apoptosis.',
      difficulty: 'M',
      chapter: 'Lipids & Membranes',
    },
    {
      q: 'A membrane protein can be extracted from the bilayer only by adding detergent. Gentle changes in pH or ionic strength do NOT release it. This protein is best classified as:',
      type: 'mcq',
      choices: [
        'Peripheral',
        'Integral',
        'Amphitropic',
        'GPI-anchored',
      ],
      correct: 1,
      explanation: 'Detergent requirement is the hallmark of integral proteins \u2014 they are held by hydrophobic interactions with the bilayer core. Peripheral proteins release with ionic/pH changes; GPI-anchored release with phospholipase C; amphitropic proteins dissociate in response to regulatory changes.',
      difficulty: 'M',
      chapter: 'Lipids & Membranes',
    },
    {
      q: 'A patient with MCAD deficiency cannot efficiently oxidize medium-chain fatty acids. Which \u03b2-oxidation step is directly impaired?',
      type: 'mcq',
      choices: [
        'Step 1 \u2014 oxidation by acyl-CoA dehydrogenase (FAD \u2192 FADH\u2082)',
        'Step 2 \u2014 hydration by enoyl-CoA hydratase',
        'Step 3 \u2014 oxidation by L-3-hydroxyacyl-CoA dehydrogenase (NAD\u207a \u2192 NADH)',
        'Step 4 \u2014 thiolysis by thiolase',
      ],
      correct: 0,
      explanation: 'MCAD = Medium-chain Acyl-CoA Dehydrogenase, which catalyzes step 1 of \u03b2-oxidation (FAD-dependent oxidation to form trans-\u03942-enoyl-CoA). Its deficiency is the most common FA oxidation disorder and is linked to some SIDS cases.',
      difficulty: 'H',
      chapter: 'Lipids & Membranes',
    },
    {
      q: 'Palmitate (C16) undergoes complete \u03b2-oxidation. Which set of numbers is correct?',
      type: 'mcq',
      choices: [
        '8 rounds \u2192 7 acetyl-CoA, 8 FADH\u2082, 8 NADH',
        '7 rounds \u2192 8 acetyl-CoA, 7 FADH\u2082, 7 NADH',
        '6 rounds \u2192 8 acetyl-CoA, 6 FADH\u2082, 6 NADH',
        '7 rounds \u2192 7 acetyl-CoA, 7 FADH\u2082, 7 NADH',
      ],
      correct: 1,
      explanation: 'Rounds = (16/2) \u2013 1 = 7. Each round yields 1 FADH\u2082, 1 NADH, 1 acetyl-CoA. The final round produces 2 acetyl-CoAs from the terminal 4-carbon fragment, so total acetyl-CoA = 16/2 = 8.',
      difficulty: 'M',
      chapter: 'Lipids & Membranes',
    },
    {
      q: 'Explain in 2\u20133 sentences why uncatalyzed transverse diffusion (flip-flop) of phospholipids is many orders of magnitude slower than lateral diffusion.',
      type: 'short',
      correct: 'Lateral diffusion keeps the polar head group in the aqueous environment throughout the motion, so it has essentially no activation energy barrier. Transverse flip-flop requires the charged/polar head group to traverse the hydrophobic bilayer core, a large desolvation and electrostatic penalty. This is why cells rely on flippases, floppases, and scramblases to actively catalyze transverse motion.',
      explanation: 'Expected answer: head group must cross the hydrophobic core \u2192 huge energetic penalty \u2192 slow without enzymes. Lateral diffusion has no such barrier so it is ~10\u2079\u00d7 faster.',
      difficulty: 'M',
      chapter: 'Lipids & Membranes',
    },
    {
      q: 'A cell is building fatty acids de novo. What molecular signal prevents these newly synthesized fatty acids from immediately entering \u03b2-oxidation, and where in the pathway does the regulation act?',
      type: 'short',
      correct: 'Malonyl-CoA, the committed intermediate of fatty acid synthesis, allosterically inhibits CPT-I (carnitine palmitoyltransferase I) on the outer mitochondrial membrane. This blocks the first step of the carnitine shuttle, preventing long-chain acyl-CoAs from entering the mitochondrial matrix where \u03b2-oxidation occurs. The result is reciprocal regulation: synthesis and breakdown do not run simultaneously.',
      explanation: 'Malonyl-CoA \u2192 CPT-I inhibition \u2192 no carnitine shuttle \u2192 no \u03b2-oxidation. Classic reciprocal regulation example.',
      difficulty: 'H',
      chapter: 'Lipids & Membranes',
    },
    {
      q: 'Compare a wax and a triacylglycerol in terms of backbone, number of fatty acid tails, and biological role.',
      type: 'short',
      correct: 'A triacylglycerol has a glycerol backbone esterified to THREE fatty acids and serves as the body\u2019s main energy-storage lipid. A wax has a long-chain alcohol backbone (not glycerol) esterified to ONE fatty acid and serves as a waterproofing, insulating, or protective coating (bird feathers, plant leaves, skin). Waxes have much higher melting points and are even more hydrophobic than TAGs.',
      explanation: 'Key differences: backbone (glycerol vs long-chain alcohol), FA count (3 vs 1), function (storage vs waterproofing).',
      difficulty: 'E',
      chapter: 'Lipids & Membranes',
    },
    {
      q: 'Fatty acids and cholesterol travel in the aqueous bloodstream bound to the same carrier protein.',
      type: 'tf',
      correct: 1,
      explanation: 'False. Free fatty acids released from adipose are carried by serum albumin. Cholesterol and TAGs travel in lipoprotein particles (chylomicrons, VLDL, LDL, HDL). They use different delivery systems.',
      difficulty: 'M',
      chapter: 'Lipids & Membranes',
    },
    {
      q: 'The activation of a fatty acid to fatty acyl-CoA costs the equivalent of two ATP because ATP is cleaved to AMP + PP\u1d62, and PP\u1d62 is subsequently hydrolyzed.',
      type: 'tf',
      correct: 0,
      explanation: 'True. Acyl-CoA synthetase cleaves ATP to AMP + PP\u1d62 (not to ADP + P\u1d62). The subsequent hydrolysis of pyrophosphate by inorganic pyrophosphatase makes the activation effectively irreversible and costs two high-energy phosphoanhydride bonds \u2014 two ATP equivalents.',
      difficulty: 'M',
      chapter: 'Lipids & Membranes',
    },
    {
      q: 'Integral membrane proteins can always be extracted from the bilayer by simply adjusting the pH or ionic strength of the surrounding buffer.',
      type: 'tf',
      correct: 1,
      explanation: 'False. Integral proteins are held in the membrane by hydrophobic interactions with the bilayer core and require detergents to be extracted. pH and ionic strength changes release only peripheral proteins (which associate via electrostatic/H-bond interactions with head groups).',
      difficulty: 'E',
      chapter: 'Lipids & Membranes',
    },
  ],
};

export default chapter;
