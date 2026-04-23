import React from 'react';
import { Callout, Table, Pill, Card } from '../components/Visual.jsx';

const chapter = {
  id: 3,
  title: 'Electron Transport Chain & ATP Synthesis',
  subtitle: 'Chemiosmosis → complexes I–IV → F0F1 ATP synthase',
  blocks: [
    {
      id: 'chemiosmotic',
      title: 'Chemiosmotic Theory & the Proton-Motive Force',
      subtitle: 'Peter Mitchell: electron flow powers a H+ gradient that drives ATP synthesis',
      images: [
        { src: 'raw/atp_image1.jpeg', alt: 'Chemiosmotic model of the inner mitochondrial membrane', caption: 'Lehninger Fig. 19-19 — Complexes I–IV establish a proton-motive force across the inner membrane; F0F1 couples H+ re-entry to ATP synthesis.' }
      ],
      content: (
        <>
          <p className="mb-3">
            <strong>Oxidative phosphorylation</strong> is the enzymatic synthesis of ATP that is
            <em> coupled</em> to the transfer of electrons from NADH and FADH<sub>2</sub> down a
            chain of membrane-embedded carriers to O<sub>2</sub>. The link between electron flow
            and ATP synthesis is <strong>not</strong> a direct chemical bond — it is an
            electrochemical gradient of protons. This is Peter Mitchell&apos;s
            <strong> chemiosmotic theory</strong>.
          </p>
          <Callout kind="tip" title="Central logic">
            Electron flow → H<sup>+</sup> pumped matrix → IMS → proton-motive force (Δp) → H<sup>+</sup> flow back through F<sub>0</sub>F<sub>1</sub> drives ADP + P<sub>i</sub> → ATP.
          </Callout>
          <p className="my-3">
            The <strong>proton-motive force (Δp)</strong> has two components that both store
            energy:
          </p>
          <Table
            headers={["Component", "Origin", "Units"]}
            rows={[
              [<><strong>ΔpH</strong> (chemical)</>, "Higher [H+] in IMS than matrix", "pH units"],
              [<><strong>Δψ</strong> (electrical)</>, "IMS is +, matrix is – (charge separation)", "mV"],
              [<><strong>Δp (total)</strong></>, "Δp = Δψ − (2.3RT/F)·ΔpH", "≈ 0.15–0.20 V"]
            ]}
          />
          <p className="my-3">
            <strong>Step-by-step logic:</strong>
          </p>
          <ol className="list-decimal pl-6 space-y-1 text-sm">
            <li>Electrons enter from NADH (Complex I) or FADH<sub>2</sub> (Complex II, β-oxidation).</li>
            <li>As electrons fall in energy through I → Q → III → cyt <em>c</em> → IV, the exergonic drop is used to pump H<sup>+</sup> out of the matrix.</li>
            <li>The inner membrane is <strong>impermeable</strong> to H<sup>+</sup>, so the gradient is stable.</li>
            <li>Protons can only return through the <strong>F<sub>0</sub></strong> channel of ATP synthase; this flow drives rotation and catalysis in F<sub>1</sub>.</li>
            <li>Final electron acceptor = O<sub>2</sub>, reduced to 2 H<sub>2</sub>O at Complex IV.</li>
          </ol>
          <Callout kind="info" title="Why a closed membrane?">
            Chemiosmosis requires a topologically closed membrane: inner mitochondrial membrane (eukaryotes), bacterial plasma membrane, or chloroplast thylakoid. A leaky membrane dissipates Δp and shuts down ATP synthesis (this is how uncouplers like DNP work).
          </Callout>
        </>
      )
    },
    {
      id: 'complex-i',
      title: 'Complex I: NADH:Ubiquinone Oxidoreductase',
      subtitle: '~850 kDa, 45 subunits — pumps 4 H+ per NADH',
      images: [
        { src: 'raw/etc_image2.jpeg', alt: 'Complex I NADH dehydrogenase', caption: 'Complex I: NADH → FMN → Fe-S clusters → ubiquinone; 4 H+ pumped.' }
      ],
      content: (
        <>
          <p className="mb-3">
            Complex I accepts a <strong>hydride (H<sup>-</sup>, 2e<sup>-</sup>)</strong> from NADH
            and delivers the electrons, <em>one at a time</em>, to ubiquinone (Q).
          </p>
          <p className="mb-3"><strong>Prosthetic groups / electron path:</strong></p>
          <ol className="list-decimal pl-6 space-y-1 text-sm">
            <li>NADH + H<sup>+</sup> donates <strong>2e<sup>-</sup></strong> as a hydride to <strong>FMN</strong> (in the matrix arm). FMN is the only carrier here that can accept 2e<sup>-</sup> at once.</li>
            <li>FMNH<sub>2</sub> passes electrons <strong>one at a time</strong> through a chain of <strong>Fe-S clusters</strong> (2Fe-2S and 4Fe-4S).</li>
            <li>The terminal cluster (<strong>N-2</strong>) transfers e<sup>-</sup> to <strong>Q</strong> on the membrane arm, producing <strong>QH<sub>2</sub></strong>.</li>
            <li>The redox drop is coupled — via a conformational/Q-cycle-like mechanism — to translocation of <strong>4 H<sup>+</sup></strong> from matrix (N side) to IMS (P side) per pair of electrons.</li>
          </ol>
          <Callout kind="tip" title="Net reaction">
            NADH + H<sup>+</sup> + Q + 4H<sup>+</sup><sub>matrix</sub> → NAD<sup>+</sup> + QH<sub>2</sub> + 4H<sup>+</sup><sub>IMS</sub>
          </Callout>
          <p className="my-3">
            Complex I is <strong>L-shaped</strong>: a hydrophilic matrix arm (NADH/FMN/Fe-S) and a membrane-embedded arm that houses the proton-pumping machinery. <strong>Rotenone</strong> — a fish poison and pesticide — blocks the Q-binding site and shuts down Complex I.
          </p>
        </>
      )
    },
    {
      id: 'complex-ii',
      title: 'Complex II: Succinate Dehydrogenase — The CAC Bridge',
      subtitle: 'Pumps 0 H+; is BOTH a CAC enzyme AND an ETC complex',
      images: [
        { src: 'raw/etc_image4.png', alt: 'Complex II succinate dehydrogenase', caption: 'Complex II: succinate → fumarate; FADH2 passes 2e- through Fe-S centers to Q. No H+ pumped.' }
      ],
      content: (
        <>
          <p className="mb-3">
            Complex II is the only ETC complex that is also an enzyme of the citric acid cycle. It
            oxidizes <strong>succinate → fumarate</strong> and funnels the released electrons into
            the Q pool.
          </p>
          <Callout kind="warn" title="Critical fact — Complex II does NOT pump protons">
            The free-energy drop from FADH<sub>2</sub> to Q (≈ +0.03 V) is too small to power H<sup>+</sup> translocation. This is why 1 FADH<sub>2</sub> ultimately yields only 1.5 ATP (vs 2.5 for NADH).
          </Callout>
          <p className="my-3"><strong>Electron path:</strong></p>
          <ol className="list-decimal pl-6 space-y-1 text-sm">
            <li>Succinate binds subunit A near a covalently bound <strong>FAD</strong>.</li>
            <li>FAD is reduced to FADH<sub>2</sub> (picks up 2e<sup>-</sup> + 2H<sup>+</sup>).</li>
            <li>Electrons move one at a time through <strong>three Fe-S centers</strong> in subunit B.</li>
            <li>Electrons reduce ubiquinone bound to subunit B: Q + 2e<sup>-</sup> + 2H<sup>+</sup> → QH<sub>2</sub>.</li>
            <li>Heme b (between subunits C and D) is <em>off-pathway</em>; it defuses stray electrons to protect against ROS formation.</li>
          </ol>
          <p className="my-3">
            Other FADH<sub>2</sub>-donor dehydrogenases (e.g., <strong>ETF:Q oxidoreductase</strong>
            from β-oxidation, <strong>glycerol-3-P dehydrogenase</strong>) also feed electrons
            directly into the Q pool — all bypass Complex I, losing those 4 H<sup>+</sup>.
          </p>
        </>
      )
    },
    {
      id: 'mobile-carriers',
      title: 'Mobile Carriers: Ubiquinone (Q) & Cytochrome c',
      subtitle: 'Two carriers that ferry e- BETWEEN complexes',
      images: [
        { src: 'raw/etc_image8.jpeg', alt: 'Ubiquinone structure and reduction states', caption: 'Ubiquinone (Q) ↔ semiquinone (•QH) ↔ ubiquinol (QH2) — 1e- or 2e- transfers.' }
      ],
      content: (
        <>
          <p className="mb-3">
            The complexes don&apos;t touch each other — two <strong>mobile carriers</strong>
            shuttle electrons between them.
          </p>
          <Table
            headers={["Feature", "Ubiquinone (Q / CoQ)", "Cytochrome c"]}
            rows={[
              ["Phase", "Lipid-soluble (isoprenoid tail)", "Water-soluble protein"],
              ["Location", "Within the inner membrane bilayer", "On the IMS face of the inner membrane"],
              ["Redox center", "Conjugated quinone ring", "Heme c (covalently attached Fe)"],
              ["e- carried", "2 (via 1e- semiquinone intermediate •Q-)", "1 at a time (Fe3+ ↔ Fe2+)"],
              ["Also carries H+?", "YES — picks up 2H+ with 2e- to form QH2", "NO — electron only"],
              ["Connects", "Complexes I/II → III", "Complex III → Complex IV"]
            ]}
          />
          <Callout kind="info" title="Why these properties matter">
            Q&apos;s lipid tail keeps it in the membrane, where it shuttles protons AND electrons. Cyt c is soluble so it can diffuse rapidly along the outer face of the inner membrane — but it transfers only one electron at a time via its heme iron.
          </Callout>
          <p className="my-3">
            The ability of Q to <em>accept or donate either 1 or 2 electrons</em> (through the
            semiquinone radical •Q<sup>-</sup>) is what makes the <strong>Q cycle</strong> of
            Complex III possible.
          </p>
        </>
      )
    },
    {
      id: 'complex-iii',
      title: 'Complex III: Cytochrome bc₁ & the Q Cycle',
      subtitle: 'Pumps 4 H+ per 2e- delivered (2 from QH2 + 2 from matrix)',
      images: [
        { src: 'raw/etc_image10.jpeg', alt: 'Q cycle at Complex III', caption: 'Q cycle: bifurcated electron flow at the Qo site; Qi site regenerates QH2.' }
      ],
      content: (
        <>
          <p className="mb-3">
            Complex III (cytochrome bc<sub>1</sub>) takes electrons from lipid-soluble QH<sub>2</sub>
            and passes them to water-soluble cyt <em>c</em>. The elegant trick — the
            <strong> Q cycle</strong> — splits each QH<sub>2</sub>&apos;s two electrons onto
            different paths so that more protons can be translocated.
          </p>
          <p className="mb-3"><strong>Step-by-step Q cycle (delivery of 2 e<sup>-</sup> to cyt c requires 2 rounds):</strong></p>
          <ol className="list-decimal pl-6 space-y-1 text-sm">
            <li><strong>Round 1:</strong> QH<sub>2</sub> binds the <strong>Q<sub>o</sub></strong> site (near the P/IMS face) and releases its 2H<sup>+</sup> into the IMS.</li>
            <li>The 2 e<sup>-</sup> <em>bifurcate</em>: the 1st e<sup>-</sup> goes to the <strong>Rieske Fe-S</strong> → cyt c<sub>1</sub> → cyt c (output).</li>
            <li>The 2nd e<sup>-</sup> goes <em>across the membrane</em>: heme b<sub>L</sub> → heme b<sub>H</sub> → a Q bound at the <strong>Q<sub>i</sub></strong> site (matrix face), producing a semiquinone •Q<sup>-</sup>.</li>
            <li><strong>Round 2:</strong> A second QH<sub>2</sub> binds Q<sub>o</sub>, dumps its 2 H<sup>+</sup> into the IMS; 1 e<sup>-</sup> exits via Rieske → cyt c.</li>
            <li>The other e<sup>-</sup> again traverses b<sub>L</sub> → b<sub>H</sub> → the •Q<sup>-</sup> at Q<sub>i</sub>, reducing it fully. It picks up <strong>2 H<sup>+</sup> from the matrix</strong> to regenerate QH<sub>2</sub>.</li>
          </ol>
          <Callout kind="tip" title="Net per 2 e- delivered to cyt c">
            2 QH<sub>2</sub> oxidized + 1 QH<sub>2</sub> regenerated = 1 QH<sub>2</sub> net consumed. <strong>4 H<sup>+</sup> appear in the IMS</strong> (2 from QH<sub>2</sub> deprotonation at Q<sub>o</sub> + 2 translocated from matrix via Q<sub>i</sub> regeneration). 2 cyt c are reduced.
          </Callout>
          <p className="my-3">
            The Q cycle is a major site of <strong>superoxide leakage</strong>: the transient
            semiquinone •Q<sup>-</sup> at Q<sub>o</sub> can hand its lone electron to O<sub>2</sub>,
            making •O<sub>2</sub><sup>-</sup>.
          </p>
        </>
      )
    },
    {
      id: 'complex-iv',
      title: 'Complex IV: Cytochrome Oxidase — O₂ → H₂O',
      subtitle: 'Pumps 2 H+ per pair; consumes 4 H+ from matrix to make H2O',
      images: [
        { src: 'raw/etc_image11.jpeg', alt: 'Complex IV cytochrome oxidase', caption: 'Complex IV: cyt c → CuA → heme a → heme a3–CuB binuclear center → O2 → 2 H2O.' }
      ],
      content: (
        <>
          <p className="mb-3">
            Complex IV is the terminal complex. It uses 4 electrons from cyt <em>c</em> to reduce
            O<sub>2</sub> — the <strong>terminal electron acceptor</strong> — to 2 H<sub>2</sub>O.
          </p>
          <p className="mb-3"><strong>Metal centers:</strong></p>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li><strong>Cu<sub>A</sub></strong> — binuclear 2-Cu center in subunit II; first e<sup>-</sup> entry point from cyt c.</li>
            <li><strong>Heme a</strong> — transfers e<sup>-</sup> to the catalytic center.</li>
            <li><strong>Heme a<sub>3</sub>–Cu<sub>B</sub> binuclear center</strong> — the site where O<sub>2</sub> binds and is reduced.</li>
          </ul>
          <p className="my-3"><strong>Step-by-step electron flow:</strong></p>
          <ol className="list-decimal pl-6 space-y-1 text-sm">
            <li>4 reduced cyt c each donate 1 e<sup>-</sup> to Cu<sub>A</sub>.</li>
            <li>Electrons pass Cu<sub>A</sub> → heme a → heme a<sub>3</sub>–Cu<sub>B</sub>.</li>
            <li>O<sub>2</sub> binds the heme a<sub>3</sub>–Cu<sub>B</sub> center and is reduced stepwise (via peroxy and ferryl intermediates) to 2 H<sub>2</sub>O.</li>
            <li><strong>4 H<sup>+</sup> from the matrix</strong> are consumed as &quot;substrate&quot; protons to make the water (these contribute to Δp by removing matrix charge).</li>
            <li>Simultaneously, <strong>2 H<sup>+</sup> per pair of electrons</strong> (= 4 H<sup>+</sup> per O<sub>2</sub>) are <em>pumped</em> from matrix to IMS.</li>
          </ol>
          <Callout kind="danger" title="Why CO and cyanide are lethal">
            Both CO and CN<sup>-</sup> bind tightly to the heme a<sub>3</sub>–Cu<sub>B</sub> center and block O<sub>2</sub> reduction. The entire ETC backs up, Δp collapses, ATP output stops — cells die from energy failure despite adequate O<sub>2</sub> in the blood.
          </Callout>
        </>
      )
    },
    {
      id: 'atp-synthase',
      title: 'ATP Synthase F₀F₁: Rotary Mechanism & Binding-Change Model',
      subtitle: '3 H+ per ATP synthesized (+ ~1 more for Pi / ATP transport)',
      images: [
        { src: 'raw/atp_image4.jpeg', alt: 'F0F1 ATP synthase architecture', caption: 'F0F1: membrane c-ring (F0) + α3β3γε head (F1); b2 stator holds the α3β3 fixed.' },
        { src: 'raw/atp_image5.jpeg', alt: 'Binding-change model', caption: 'Boyer\'s binding-change model: β-empty, β-ADP (loose), β-ATP (tight) cycle as γ rotates.' }
      ],
      content: (
        <>
          <p className="mb-3">
            ATP synthase is a literal molecular rotary motor. Two functional parts:
          </p>
          <Table
            headers={["Part", "Subunits", "Role"]}
            rows={[
              [<strong>F<sub>0</sub></strong>, "Membrane c-ring (c10) + a + b2", "Proton channel; rotor (c-ring) + stator (a, b2)"],
              [<strong>F<sub>1</sub></strong>, "α3β3γε (ε and γ = shaft)", "Catalytic head in the matrix; β-subunits make ATP"]
            ]}
          />
          <p className="my-3"><strong>Step-by-step rotary catalysis:</strong></p>
          <ol className="list-decimal pl-6 space-y-1 text-sm">
            <li>Protons flow down their gradient from IMS → matrix through the interface between subunit <em>a</em> and the <strong>c-ring</strong> of F<sub>0</sub>.</li>
            <li>Each H<sup>+</sup> entering and leaving a c-subunit rotates the <strong>c-ring</strong> one step. The ring drags the attached <strong>γ/ε central shaft</strong> around.</li>
            <li>The b<sub>2</sub> stator holds the α<sub>3</sub>β<sub>3</sub> hexamer <em>stationary</em> while γ spins inside it.</li>
            <li>γ is asymmetric → as it rotates in 120° steps it presses against each of the three αβ pairs in turn, forcing each β through the <strong>three conformations</strong>.</li>
          </ol>
          <p className="my-3"><strong>Binding-change model (Boyer):</strong></p>
          <Table
            headers={["β conformation", "Affinity", "What happens"]}
            rows={[
              [<>β-<strong>empty</strong></>, "very loose", "Releases ATP (if rotation just arrived) / binds new ADP + Pi"],
              [<>β-<strong>ADP</strong></>, "loose", "Holds ADP + Pi"],
              [<>β-<strong>ATP</strong></>, "tight", "Spontaneously condenses bound ADP + Pi → ATP (ΔG ≈ 0 at this site)"]
            ]}
          />
          <Callout kind="tip" title="Key insight">
            The ENERGETICALLY expensive step is not forming ATP at the active site — that is near-spontaneous once water is excluded. The PMF is spent <em>releasing</em> tightly bound ATP by driving the β-ATP → β-empty conformational change.
          </Callout>
          <p className="my-3">
            <strong>Proton stoichiometry:</strong> a full 360° rotation releases 3 ATP and requires
            rotation of the entire c-ring — in mammals with c<sub>8</sub>, that is 8 H<sup>+</sup> /
            3 ATP ≈ <strong>~3 H<sup>+</sup> per ATP</strong>. An additional ~1 H<sup>+</sup> is
            spent driving the <strong>phosphate (Pi)</strong> / ATP/ADP exchange antiporter, so
            cells typically spend ~4 H<sup>+</sup> per cytosolic ATP delivered.
          </p>
          <Callout kind="warn" title="Oligomycin">
            Oligomycin plugs the F<sub>0</sub> proton channel, preventing rotation and blocking ATP synthesis. Because ETC pumping and ATP synthesis are coupled by Δp, oligomycin also eventually halts electron transport (the gradient becomes insurmountable).
          </Callout>
        </>
      )
    },
    {
      id: 'atp-yield-ros',
      title: 'ATP Yield from Glucose & ROS Defense',
      subtitle: '30–32 ATP per glucose; superoxide neutralized by glutathione',
      images: [],
      content: (
        <>
          <p className="mb-3">
            Using modern P/O ratios (<strong>2.5 ATP / NADH, 1.5 ATP / FADH<sub>2</sub></strong>),
            one glucose yields:
          </p>
          <Table
            headers={["Stage", "Direct ATP/GTP", "NADH", "FADH2", "Running total"]}
            rows={[
              ["Glycolysis (cytosol)", "+2 ATP", "2 (cytosolic)", "0", "2 ATP + 2 cNADH"],
              ["Pyruvate → acetyl-CoA (×2)", "0", "2 (matrix)", "0", "2 NADH added"],
              ["CAC (×2 turns)", "+2 GTP", "6", "2", "2 GTP + 6 NADH + 2 FADH2"],
              ["OxPhos (matrix NADH)", "8 × 2.5 = 20", "—", "—", ""],
              ["OxPhos (FADH2)", "2 × 1.5 = 3", "—", "—", ""],
              ["Cytosolic NADH (shuttle-dependent)", "2 × 1.5 (glycerol-P) or 2 × 2.5 (malate-Asp)", "", "", <><strong>≈30 (heart/liver) or 32 ATP</strong></>]
            ]}
          />
          <Callout kind="info" title="Why the range (30–32)?">
            Cytosolic NADH from glycolysis can&apos;t cross the inner membrane. The <strong>glycerol-3-phosphate shuttle</strong> (brain/muscle) hands electrons to FAD → Q (only 1.5 ATP each). The <strong>malate–aspartate shuttle</strong> (heart/liver/kidney) delivers them as matrix NADH (2.5 ATP each).
          </Callout>
          <h3 className="font-semibold mt-4 mb-2">Reactive Oxygen Species (ROS)</h3>
          <p className="mb-3">
            Roughly 0.1–2% of electrons leak at <strong>Complex I</strong> and the
            <strong> Q<sub>o</sub> site of Complex III</strong> (via the semiquinone radical
            •Q<sup>-</sup>), reducing O<sub>2</sub> → <strong>superoxide (•O<sub>2</sub><sup>-</sup>)</strong>.
            Superoxide can go on to make H<sub>2</sub>O<sub>2</sub> and — via the Fenton reaction
            with free Fe<sup>2+</sup> — the extremely damaging <strong>hydroxyl radical •OH</strong>.
          </p>
          <p className="mb-3"><strong>Mitochondrial defense cascade:</strong></p>
          <ol className="list-decimal pl-6 space-y-1 text-sm">
            <li><strong>Superoxide dismutase (SOD)</strong>: 2 •O<sub>2</sub><sup>-</sup> + 2 H<sup>+</sup> → H<sub>2</sub>O<sub>2</sub> + O<sub>2</sub>.</li>
            <li><strong>Glutathione peroxidase</strong> uses <strong>2 GSH</strong> (reduced glutathione) to reduce H<sub>2</sub>O<sub>2</sub> → 2 H<sub>2</sub>O, producing GSSG (oxidized, disulfide-linked).</li>
            <li><strong>Glutathione reductase</strong> regenerates GSH using <strong>NADPH</strong>: GSSG + NADPH + H<sup>+</sup> → 2 GSH + NADP<sup>+</sup>.</li>
            <li>NADPH supply ultimately comes from the <strong>pentose phosphate pathway</strong>.</li>
          </ol>
          <Callout kind="tip" title="The through-line">
            Redox balance inside the mitochondrion is kept by GSH ↔ GSSG, and that cycle is only possible because NADPH (from the PPP) keeps feeding electrons in.
          </Callout>
        </>
      )
    },
    {
      id: 'inhibitors',
      title: 'ETC Inhibitors & OxPhos Disease',
      subtitle: 'Each inhibitor is a classic exam Q — AND explains a disease',
      images: [],
      content: (
        <>
          <Table
            headers={["Agent", "Target", "Effect"]}
            rows={[
              [<><strong>Rotenone</strong> (pesticide / fish poison)</>, "Complex I Q-site", "Blocks e- entry from NADH; NADH↑, Q-pool stays oxidized"],
              [<><strong>Amytal</strong> (barbiturate)</>, "Complex I", "Same as rotenone"],
              [<><strong>Antimycin A</strong></>, "Complex III Q-i site", "Blocks the Q cycle; QH2↑, cyt c stays oxidized"],
              [<><strong>Cyanide (CN-)</strong></>, "Complex IV heme a3–CuB", "Blocks O2 reduction; ETC backs up entirely"],
              [<><strong>CO (carbon monoxide)</strong></>, "Complex IV heme a3", "Same as CN-"],
              [<><strong>Azide (N3-)</strong></>, "Complex IV", "Same as CN-"],
              [<><strong>Oligomycin</strong></>, "F0 proton channel of ATP synthase", "Blocks H+ re-entry → Δp builds → ETC stalls"],
              [<><strong>DNP</strong> (2,4-dinitrophenol)</>, "UNCOUPLER — shuttles H+ across the membrane", "Collapses Δp; ETC races; no ATP made; heat produced"]
            ]}
          />
          <Callout kind="warn" title="Uncouplers vs. inhibitors">
            An <em>inhibitor</em> stops electron flow (or stops ATP synthase). An <em>uncoupler</em> lets electrons flow <strong>faster than ever</strong> but wastes all the energy as heat — because protons bypass the synthase. Natural uncoupler: <strong>UCP1 (thermogenin)</strong> in brown adipose tissue.
          </Callout>
          <h3 className="font-semibold mt-4 mb-2">OxPhos Disease (mitochondrial disease)</h3>
          <p className="mb-3">
            Genetic defects in any ETC complex or ATP synthase produce the same downstream
            metabolic signature. Follow the chain of consequences:
          </p>
          <ol className="list-decimal pl-6 space-y-1 text-sm">
            <li>ETC defect → NADH cannot be reoxidized → <strong>matrix [NADH]/[NAD<sup>+</sup>]</strong> rises.</li>
            <li>High NADH <strong>inhibits PDH and the CAC dehydrogenases</strong> (IDH, αKG-DH) → pyruvate accumulates.</li>
            <li>Cytosolic NADH cannot be shuttled in efficiently → the cell must reoxidize it via <strong>lactate dehydrogenase</strong>: pyruvate + NADH → lactate + NAD<sup>+</sup>. Result: <strong>lactic acidosis</strong>.</li>
            <li>Accumulated pyruvate is also transaminated: pyruvate + Glu → <strong>alanine</strong> + αKG → <strong>elevated blood alanine</strong>.</li>
            <li>Tissues most affected: high-energy, high-OxPhos ones — <strong>CNS, heart, skeletal muscle</strong>.</li>
          </ol>
          <Callout kind="danger" title="Exam trigger">
            High blood lactate + high blood alanine + normal liver = think mitochondrial / OxPhos disease. Mechanism: NADH back-up → pyruvate back-up → alanine &amp; lactate spillover.
          </Callout>
        </>
      )
    }
  ],
  keyReview: {
    vocab: [
      'chemiosmosis', 'proton-motive force (Δp)', 'ΔpH', 'Δψ', 'respiratory chain',
      'NADH:ubiquinone oxidoreductase (Complex I)', 'FMN', 'Fe-S cluster', 'ubiquinone (Q)',
      'ubiquinol (QH2)', 'semiquinone (•Q-)', 'succinate dehydrogenase (Complex II)',
      'cytochrome bc1 (Complex III)', 'Q cycle', 'Qo site', 'Qi site', 'Rieske iron-sulfur',
      'cytochrome c', 'cytochrome c oxidase (Complex IV)', 'binuclear CuA center',
      'heme a3–CuB center', 'F0', 'F1', 'c-ring', 'γ shaft', 'α3β3 hexamer',
      'binding-change model', 'β-ATP / β-ADP / β-empty', 'superoxide', 'glutathione (GSH)',
      'GSSG', 'NADPH', 'rotenone', 'cyanide', 'oligomycin', 'DNP', 'uncoupler',
      'ATP/ADP translocase', 'phosphate carrier', 'malate-aspartate shuttle',
      'glycerol-3-phosphate shuttle'
    ],
    laws: [
      'Mitchell\'s chemiosmotic theory: electron flow builds a proton gradient that powers ATP synthesis — no direct high-energy intermediate',
      'Δp = Δψ – (2.3RT/F)·ΔpH; both electrical AND chemical potentials contribute',
      'Complex II does NOT pump protons (ΔE° too small)',
      'H+ pumped per pair of electrons: I = 4, II = 0, III = 4, IV = 2 (pumped) + 4 (consumed as substrate)',
      '~3 H+ translocated through F0F1 per ATP synthesized (+ ~1 H+ for Pi/ATP transport → ~4 total)',
      'P/O ratios (modern): 2.5 ATP per NADH, 1.5 ATP per FADH2',
      'Glucose → 30 ATP (glycerol-P shuttle) or 32 ATP (malate-aspartate shuttle)',
      'O2 is the terminal electron acceptor: O2 + 4e- + 4H+ → 2 H2O at Complex IV',
      'Binding-change model: 3 catalytic β sites alternate (empty → ADP loose → ATP tight → empty)',
      'Uncouplers (DNP, UCP1) collapse Δp → heat; ETC races, ATP synthesis stops'
    ],
    methods: [
      'Measuring Δψ with fluorescent dyes (e.g., JC-1, TMRE)',
      'P/O ratio determination using isolated mitochondria + oxygen electrode',
      'Selective inhibition (rotenone, antimycin, CN-, oligomycin, DNP) to localize a block',
      'Submitochondrial particles — vesicles with inverted topology used to demonstrate directional H+ pumping',
      'X-ray crystallography / cryo-EM of F1 with bound ADP/ATP mapped the binding-change model',
      'Boyer isotope-exchange experiments that exposed β-site cooperativity'
    ],
    diagrams: [
      'Lehninger 19-19: full chemiosmotic model with Δp driving F0F1',
      'Lehninger 19-9: Complex I with FMN, Fe-S chain, Q site',
      'Lehninger 19-10: Complex II succinate dehydrogenase structure',
      'Lehninger 19-12: Complex III Q cycle (Qo, Qi, Rieske, heme bL/bH)',
      'Lehninger 19-13: Complex IV binuclear centers, O2 → 2H2O',
      'Lehninger 19-25f: F0F1 architecture (c-ring, γ-shaft, α3β3, b2 stator)',
      'Lehninger 19-26: Binding-change model conformational cycle',
      'Lehninger 19-18: ROS formation and GSH/GSSG/NADPH defense cycle'
    ]
  },
  questions: [
    {
      q: 'Which complex of the electron transport chain does NOT pump protons across the inner mitochondrial membrane?',
      type: 'mcq',
      choices: ['Complex I (NADH dehydrogenase)', 'Complex II (succinate dehydrogenase)', 'Complex III (cyt bc1)', 'Complex IV (cyt oxidase)'],
      correct: 1,
      explanation: 'Complex II (succinate dehydrogenase) does not pump protons. The free-energy drop from succinate → FADH2 → Q is too small (~0.03 V). This is the fundamental reason 1 FADH2 yields only 1.5 ATP while 1 NADH yields 2.5 ATP.',
      difficulty: 'E',
      chapter: 'ATP & OxPhos'
    },
    {
      q: 'How many H+ are translocated into the IMS per pair of electrons delivered into Complex I?',
      type: 'mcq',
      choices: ['2', '4', '6', '10'],
      correct: 1,
      explanation: 'Complex I pumps 4 H+ per pair of electrons (per NADH oxidized). Complex III also pumps 4, and Complex IV pumps 2, giving 10 total per NADH.',
      difficulty: 'E',
      chapter: 'ATP & OxPhos'
    },
    {
      q: 'Approximately how many ATP are produced per glucose when the malate–aspartate shuttle is used?',
      type: 'mcq',
      choices: ['~24', '~28', '~30', '~32'],
      correct: 3,
      explanation: 'Malate–aspartate shuttle delivers cytosolic NADH electrons as matrix NADH (2.5 ATP each), giving ~32 ATP. The glycerol-3-phosphate shuttle delivers them as FADH2 to Q (1.5 ATP each), giving ~30.',
      difficulty: 'M',
      chapter: 'ATP & OxPhos'
    },
    {
      q: 'Rotenone (a pesticide / fish poison) blocks which complex?',
      type: 'mcq',
      choices: ['Complex I', 'Complex II', 'Complex III', 'Complex IV'],
      correct: 0,
      explanation: 'Rotenone binds at the ubiquinone-binding site of Complex I and prevents electron transfer from the N-2 Fe-S cluster to Q. NADH accumulates; the Q pool stays oxidized. FADH2 entry at II still functions.',
      difficulty: 'E',
      chapter: 'ATP & OxPhos'
    },
    {
      q: 'Which mobile carrier transfers electrons one at a time from Complex III to Complex IV and is a water-soluble heme protein located on the intermembrane-space face of the inner membrane?',
      type: 'mcq',
      choices: ['Ubiquinone (CoQ)', 'Cytochrome c', 'Cytochrome c1', 'NADH'],
      correct: 1,
      explanation: 'Cytochrome c is a small soluble heme-containing protein in the IMS. Its heme iron cycles Fe3+ ↔ Fe2+, carrying one electron at a time between Complexes III and IV. Ubiquinone is membrane-soluble and carries 2 electrons with 2 protons.',
      difficulty: 'M',
      chapter: 'ATP & OxPhos'
    },
    {
      q: 'Why do genetic defects in oxidative phosphorylation frequently cause elevated blood alanine?',
      type: 'mcq',
      choices: [
        'Alanine is synthesized by the ETC directly',
        'NADH cannot be reoxidized → PDH/CAC inhibited → pyruvate accumulates → transaminated to alanine',
        'ATP synthase catalyzes alanine production',
        'Alanine is a competitive inhibitor of cytochrome c'
      ],
      correct: 1,
      explanation: 'When the ETC is broken, NADH/NAD+ rises in the matrix. High NADH inhibits PDH and CAC dehydrogenases, so pyruvate accumulates. Excess pyruvate is transaminated (pyruvate + glutamate → alanine + α-KG) AND reduced to lactate, giving the classic high-alanine + high-lactate OxPhos-disease picture.',
      difficulty: 'H',
      chapter: 'ATP & OxPhos'
    },
    {
      q: 'In the binding-change model of ATP synthase, how many catalytic β-subunit sites alternate through distinct conformations during one full rotation of the γ-shaft?',
      type: 'mcq',
      choices: ['1', '2', '3', '4'],
      correct: 2,
      explanation: 'There are 3 catalytic β sites in the α3β3 head. At any instant one is in the tight (β-ATP) state, one loose (β-ADP), and one very-loose/empty (β-empty). A 120° step of γ advances each β to the next state; a full 360° rotation releases 3 ATP.',
      difficulty: 'M',
      chapter: 'ATP & OxPhos'
    },
    {
      q: 'Which inhibitor is classified as an UNCOUPLER (as opposed to an ETC-complex or ATP-synthase inhibitor)?',
      type: 'mcq',
      choices: ['Oligomycin', 'Antimycin A', 'Rotenone', '2,4-Dinitrophenol (DNP)'],
      correct: 3,
      explanation: 'DNP is a lipophilic weak acid that shuttles protons across the inner membrane, dissipating Δp. The ETC runs at maximal speed but no gradient means no ATP — energy escapes as heat. Oligomycin, antimycin and rotenone all BLOCK electron or proton flow.',
      difficulty: 'M',
      chapter: 'ATP & OxPhos'
    },
    {
      q: 'What is the net H+ movement into the IMS per pair of electrons passing completely through Complex III (the Q cycle)?',
      type: 'mcq',
      choices: ['2 H+', '4 H+', '6 H+', '10 H+'],
      correct: 1,
      explanation: 'The Q cycle nets 4 H+ into the IMS per 2 electrons reaching cyt c: 2 H+ are released by QH2 deprotonation at the Qo site, and 2 more are translocated from the matrix via the Qi-site regeneration of QH2.',
      difficulty: 'H',
      chapter: 'ATP & OxPhos'
    },
    {
      q: 'At Complex IV, what is the terminal electron acceptor and to what is it reduced?',
      type: 'mcq',
      choices: [
        'NAD+ is reduced to NADH',
        'Cytochrome c is reduced to cytochrome c1',
        'O2 is reduced to 2 H2O',
        'H+ is reduced to H2'
      ],
      correct: 2,
      explanation: 'O2 binds the heme a3–CuB binuclear center of Complex IV, accepts 4 electrons and 4 matrix H+, and is reduced to 2 H2O. Loss of this terminal acceptor (e.g., CN- or CO poisoning) collapses the entire chain.',
      difficulty: 'E',
      chapter: 'ATP & OxPhos'
    },
    {
      q: 'Short answer: Approximately how many protons must flow through F0F1 to synthesize ONE molecule of ATP (including the cost of Pi / ATP transport)?',
      type: 'short',
      correct: '~3–4 H+',
      explanation: 'Rotary-catalysis stoichiometry is ~3 H+ per ATP synthesized at the β-site. An additional ~1 H+ is spent driving the phosphate carrier and the ATP/ADP translocase so a fully usable cytosolic ATP costs ~4 H+ in total.',
      difficulty: 'M',
      chapter: 'ATP & OxPhos'
    },
    {
      q: 'Short answer: Why is 1 NADH worth 2.5 ATP while 1 FADH2 is worth only 1.5 ATP?',
      type: 'short',
      correct: 'NADH enters at Complex I → 10 H+ pumped (4+4+2); FADH2 enters at Q → bypasses Complex I, only 6 H+ pumped (4+2). Fewer H+ = fewer ATP (~3 H+ per ATP).',
      explanation: 'Entry point determines H+ pumped. NADH delivers electrons to Complex I → 4 H+ pumped there, then 4 more at III, 2 at IV = 10 H+. FADH2 skips I and feeds Q directly → only 4 + 2 = 6 H+. At ~3–4 H+ per ATP this yields ~2.5 vs ~1.5 ATP respectively.',
      difficulty: 'M',
      chapter: 'ATP & OxPhos'
    },
    {
      q: 'Short answer: Describe how the cell disposes of the superoxide radical (•O2-) that leaks from Complexes I and III.',
      type: 'short',
      correct: 'SOD converts •O2- to H2O2 and O2. Glutathione peroxidase then uses 2 GSH to reduce H2O2 → 2 H2O, forming GSSG. Glutathione reductase regenerates GSH using NADPH (from the PPP).',
      explanation: 'Three-step defense: (1) SOD dismutates superoxide to H2O2 + O2; (2) glutathione peroxidase uses 2 GSH to reduce H2O2 → 2 H2O, producing GSSG (oxidized, disulfide); (3) glutathione reductase uses NADPH (from the pentose phosphate pathway) to regenerate GSH from GSSG.',
      difficulty: 'H',
      chapter: 'ATP & OxPhos'
    },
    {
      q: 'True or False: The proton-motive force has both a chemical (ΔpH) and an electrical (Δψ) component.',
      type: 'tf',
      choices: ['True', 'False'],
      correct: 0,
      explanation: 'True. Pumping H+ out of the matrix produces a chemical gradient (lower pH in the IMS) AND separates charge (IMS positive, matrix negative). Both components store free energy; Δp = Δψ − (2.3RT/F)·ΔpH.',
      difficulty: 'E',
      chapter: 'ATP & OxPhos'
    },
    {
      q: 'True or False: DNP causes body temperature to rise because it allows electron transport to run very rapidly while dissipating the proton gradient as heat.',
      type: 'tf',
      choices: ['True', 'False'],
      correct: 0,
      explanation: 'True. DNP is a protonophore: it shuttles H+ back across the inner membrane, collapsing Δp. The ETC keeps running (even accelerates) to try to rebuild the gradient, but all the released energy is dissipated as heat rather than being captured as ATP.',
      difficulty: 'M',
      chapter: 'ATP & OxPhos'
    }
  ]
};

export default chapter;
