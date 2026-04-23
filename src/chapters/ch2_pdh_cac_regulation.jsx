/**
 * Chapter 2 — PDH, Citric Acid Cycle & Regulation
 * Biochemistry — Unit IV
 * Sources:
 *   - CAC InClass (1).md  (primary)
 *   - CAC quiz (question style reference)
 *   - PDC CAC Lipids Membranes - Details - Kahoot!.md
 *   - CAC and ETC Classroom Discussion copy.md
 */

import React from 'react';
import { Callout, Table, Pill, Card } from '../components/Visual.jsx';

export default {
  id: 2,
  title: 'PDH, Citric Acid Cycle & Regulation',
  subtitle: 'Pyruvate → Acetyl-CoA → CAC → NADH/FADH2/GTP',
  blocks: [
    // ================================================================
    // BLOCK 1 — OVERVIEW
    // ================================================================
    {
      id: 'overview',
      title: 'Cellular Respiration & the Pyruvate Node',
      subtitle: 'Where the carbons of glucose truly meet oxygen',
      images: [],
      content: (
        <>
          <p>
            Cellular respiration is the aerobic oxidation of fuel molecules to CO<sub>2</sub> and H<sub>2</sub>O, a process that
            consumes O<sub>2</sub> and produces far more ATP from glucose than glycolysis alone. It is the central
            energy-extracting program of nearly all animals, plants, and aerobic microorganisms. Cellular respiration is
            traditionally divided into three stages: (1) acetyl-CoA production, (2) acetyl-CoA oxidation through the citric
            acid cycle (CAC), and (3) electron transfer coupled to oxidative phosphorylation. Chapter 2 covers the first two
            stages.
          </p>
          <p>
            Pyruvate is the molecular crossroads. Produced by glycolysis in the cytosol, it can be: (a) reduced to lactate
            during fermentation, (b) transaminated to alanine, (c) carboxylated to oxaloacetate by pyruvate carboxylase (an
            anaplerotic reaction), or (d) oxidatively decarboxylated to acetyl-CoA by the pyruvate dehydrogenase (PDH)
            complex. The PDH reaction is the committed, irreversible entry of carbohydrate carbon into full oxidation, and
            it is where the first glucose-derived carbon is fully oxidized to CO<sub>2</sub>.
          </p>
          <p>
            Acetyl-CoA (the common oxidizable currency produced from carbohydrates, fats, and ketogenic amino acids) then
            enters the CAC in the mitochondrial matrix. Each turn of the cycle fully oxidizes one acetyl group to 2 CO<sub>2</sub>,
            captures electrons as 3 NADH and 1 FADH<sub>2</sub>, and generates 1 GTP (or ATP) by substrate-level
            phosphorylation.
          </p>
          <Callout kind="info" title="Why acetyl-CoA and not pyruvate?">
            The CAC cannot use pyruvate directly — it requires a 2-carbon acetyl unit activated as a thioester to CoA.
            PDH is the obligatory gateway that prepares pyruvate for the cycle.
          </Callout>
          <Table
            headers={['Stage', 'Location', 'Fuel in', 'Key products']}
            rows={[
              ['Glycolysis', 'Cytosol', 'Glucose', '2 pyruvate, 2 ATP, 2 NADH'],
              ['PDH reaction', 'Mito. matrix', 'Pyruvate', 'Acetyl-CoA, CO2, NADH'],
              ['Citric acid cycle', 'Mito. matrix', 'Acetyl-CoA', '2 CO2, 3 NADH, FADH2, GTP'],
              ['ETC + OxPhos', 'Inner mito. mem.', 'NADH, FADH2, O2', 'H2O, ~26 ATP']
            ]}
          />
          <Callout kind="warn" title="Location matters">
            The PDH complex is located in the mitochondrial <b>matrix</b> (soluble), NOT embedded in the inner
            mitochondrial membrane. The one CAC enzyme that IS membrane-embedded is succinate dehydrogenase (Complex II).
          </Callout>
        </>
      )
    },

    // ================================================================
    // BLOCK 2 — PDH ARCHITECTURE
    // ================================================================
    {
      id: 'pdh-arch',
      title: 'PDH Complex: 3 Enzymes, 5 Cofactors, Substrate Channeling',
      subtitle: 'A multienzyme machine that illustrates almost every biochemical principle',
      images: [
        {
          src: 'raw/cac_image5.png',
          alt: 'Cryo-EM structure of the PDH complex showing E1 (TPP), E2 (lipoyllysine core), and E3 (FAD) as color-coded subunits arranged with cubic symmetry.',
          caption: 'PDH complex. Only 6 of 24 E2 subunits shown; the full mammalian complex has ~60 subunits total. (Source: pdb101.rcsb.org/motm/153)'
        }
      ],
      content: (
        <>
          <p>
            The pyruvate dehydrogenase complex (PDC or PDH) is a ~9 MDa multienzyme machine made of three catalytic
            activities — E1 (pyruvate dehydrogenase), E2 (dihydrolipoyl transacetylase), and E3 (dihydrolipoyl
            dehydrogenase) — plus regulatory kinase/phosphatase subunits. E2 forms a cubic/icosahedral core; multiple
            copies of E1 and E3 decorate the surface.
          </p>
          <p>
            PDH uses <b>five cofactors</b>, four derived from vitamins: thiamine pyrophosphate (TPP, from B1/thiamine),
            lipoic acid covalently amide-linked to a lysine (&quot;lipoyllysine&quot;, on E2), FAD (from B2/riboflavin, on
            E3), NAD+ (from B3/niacin, a co-substrate), and CoA-SH (from B5/pantothenate, a co-substrate).
            TPP, lipoyllysine, and FAD are <b>prosthetic groups</b> — permanently bound to specific subunits. NAD+ and
            CoA-SH are <b>co-substrates</b> that bind, react, and diffuse away.
          </p>
          <p>
            What makes PDH famous is <b>substrate channeling</b>. The lipoyllysine arm of E2 is a swinging
            &quot;tether&quot; (~14 Å long) that physically carries the reactive acetyl intermediate from E1 → E2 → E3
            without ever releasing it into bulk solution. This prevents loss of the high-energy thioester to competing
            enzymes and keeps local concentrations of intermediates high.
          </p>
          <Callout kind="tip" title="Principles the PDH complex illustrates">
            <ul className="list-disc ml-5 space-y-1">
              <li>Substrate channeling via a swinging-arm tether</li>
              <li>Cofactor / prosthetic group vs. co-substrate distinction</li>
              <li>Covalent regulation (phosphorylation by PDH kinase)</li>
              <li>Allosteric regulation (ATP, NADH, acetyl-CoA feedback)</li>
              <li>NAD+ recycling dependence on the ETC</li>
              <li>Mitochondrial matrix localization (NOT membrane-embedded)</li>
              <li>Prototype for α-KG DH and branched-chain α-keto-acid DH complexes</li>
            </ul>
          </Callout>
          <Callout kind="warn" title="What PDH does NOT illustrate">
            PDH does NOT hydrolyze ATP — the acetyl thioester is driven by the oxidative decarboxylation, not by ATP
            cleavage. A common misconception is that ATP hydrolysis drives thioester formation. This is false.
          </Callout>
          <Table
            headers={['Cofactor', 'Vitamin source', 'Bound to', 'Role']}
            rows={[
              ['TPP', 'B1 (thiamine)', 'E1 (prosthetic)', 'Decarboxylation, hydroxyethyl carbanion stabilization'],
              ['Lipoyllysine', '(lipoic acid)', 'E2 (prosthetic)', 'Oxidation + swinging arm carrier'],
              ['CoA-SH', 'B5 (pantothenate)', 'Co-substrate', 'Thiol that captures the acetyl group'],
              ['FAD', 'B2 (riboflavin)', 'E3 (prosthetic)', 'Re-oxidizes lipoyl disulfide'],
              ['NAD+', 'B3 (niacin)', 'Co-substrate', 'Final e- acceptor → NADH']
            ]}
          />
        </>
      )
    },

    // ================================================================
    // BLOCK 3 — PDH MECHANISM STEP BY STEP
    // ================================================================
    {
      id: 'pdh-mech',
      title: 'PDH Mechanism — Step-by-Step (E1 → E2 → E3)',
      subtitle: 'Five coordinated reactions, one swinging lipoyl arm',
      images: [
        {
          src: 'raw/cac_image7.jpeg',
          alt: 'Detailed reaction cycle of the PDH complex. E1 decarboxylates pyruvate with TPP to hydroxyethyl-TPP, which reductively acetylates lipoyllysine on E2. E2 transfers the acetyl group to CoA-SH. E3 re-oxidizes the dihydrolipoyl disulfide using FAD, and FADH2 is re-oxidized by NAD+ to regenerate FAD and NADH.',
          caption: 'Lehninger Fig. 16-6 — PDH reaction cycle.'
        }
      ],
      content: (
        <>
          <p>
            PDH catalyzes five mechanistically distinct reactions packaged into a single, channeled catalytic cycle.
            Watch the lipoyl arm carry the acetyl group between subunits — this is the key conceptual move.
          </p>

          <h4 className="font-semibold mt-3">Step 1 — E1 decarboxylates pyruvate (TPP)</h4>
          <p className="text-sm">
            <b>Cofactor:</b> TPP on E1. <b>Bond broken:</b> C1–C2 of pyruvate. <b>Bond formed:</b> C–C bond between
            pyruvate C2 and the thiazolium C2 of TPP. <b>Released:</b> CO<sub>2</sub> (this is the first glucose-derived
            carbon to be fully oxidized!). The resulting species is a resonance-stabilized hydroxyethyl-TPP carbanion
            (also drawn as the enamine). TPP&apos;s thiazolium C2 is unusually acidic because of the adjacent positively
            charged N — deprotonation gives an ylide that attacks the pyruvate carbonyl.
          </p>

          <h4 className="font-semibold mt-3">Step 2 — E1 oxidizes hydroxyethyl-TPP and transfers the acetyl group to lipoyllysine (E2)</h4>
          <p className="text-sm">
            <b>Cofactor:</b> lipoyllysine (E2, oxidized disulfide form). <b>Bond broken:</b> one S–S of the lipoyl
            disulfide. <b>Bond formed:</b> a high-energy <b>thioester</b> between the acetyl group and one sulfur of
            lipoate; the other sulfur becomes a free thiol (–SH). This is the key oxidation of the pathway — two
            electrons from the hydroxyethyl group reduce the lipoyl disulfide. TPP is regenerated as the acetyl group is
            handed off. The acetyl–lipoyl thioester is energetically comparable to acetyl-CoA.
          </p>

          <h4 className="font-semibold mt-3">Step 3 — E2 transfers the acetyl group to CoA-SH</h4>
          <p className="text-sm">
            <b>Cofactor:</b> CoA-SH (co-substrate). <b>Bond broken:</b> acetyl–lipoyl thioester. <b>Bond formed:</b>
            acetyl–CoA thioester. <b>Released:</b> <b>acetyl-CoA</b> (product!). The lipoyl arm is left in its fully
            reduced dihydrolipoyl (–SH, –SH) form. The energy of the original thioester is preserved in the new
            thioester; that is why no ATP hydrolysis is needed.
          </p>

          <h4 className="font-semibold mt-3">Step 4 — E3 re-oxidizes dihydrolipoyl using FAD</h4>
          <p className="text-sm">
            <b>Cofactor:</b> FAD (E3 prosthetic group). <b>Bond broken:</b> two S–H of dihydrolipoyl. <b>Bond formed:</b>
            the lipoyl S–S disulfide is regenerated. FAD accepts 2 e- + 2 H+ → FADH<sub>2</sub>. Because FAD is
            covalently (prosthetically) bound to E3, the electrons are captured in place.
          </p>

          <h4 className="font-semibold mt-3">Step 5 — E3 transfers electrons from FADH2 to NAD+</h4>
          <p className="text-sm">
            <b>Cofactor:</b> NAD+ (co-substrate). <b>Bond broken:</b> N–H (FADH<sub>2</sub>). <b>Bond formed:</b> C–H on
            the nicotinamide ring. <b>Released:</b> <b>NADH + H+</b> (product!). FAD is regenerated so E3 is ready for
            another cycle. This peculiar FAD → NAD+ electron flow is thermodynamically uphill in isolation, but the
            E3 active site geometry and active-site cysteines make it proceed.
          </p>

          <Callout kind="tip" title="Why is E3 necessary?">
            CO<sub>2</sub> (step 1) and acetyl-CoA (step 3) are already released. But after step 3 the lipoyl arm is
            stuck in the reduced (–SH, –SH) form. E3 re-oxidizes it so the cycle can run again. Without E3, the complex
            would be a one-shot reaction.
          </Callout>

          <Callout kind="info" title="Substrate channeling, visualized">
            The lipoyllysine tether is ~14 Å of flexible arm. It reaches E1 (grabs the acetyl), swings to E2 (delivers
            to CoA-SH), and swings to E3 (gets re-oxidized). The reactive acetyl intermediate is never released into
            bulk solvent — it cannot be &quot;stolen&quot; by other enzymes, and its local concentration is effectively
            huge.
          </Callout>

          <Card title="Net reaction">
            <p className="font-mono text-sm">
              Pyruvate + CoA-SH + NAD+ → Acetyl-CoA + CO<sub>2</sub> + NADH
            </p>
            <p className="text-xs text-slate-600 mt-2">
              ΔG&apos;° ≈ −33.4 kJ/mol. Irreversible. No ATP is produced or consumed.
            </p>
          </Card>

          <Callout kind="warn" title="Common distractors">
            <ul className="list-disc ml-5 space-y-1">
              <li>&quot;Functional group that captures the acetyl group?&quot; → the <b>thiol</b> (–SH) of CoA.</li>
              <li>&quot;Which carbon of pyruvate becomes CO<sub>2</sub>?&quot; → C1 (the carboxylate).</li>
              <li>&quot;Which cofactor performs the decarboxylation?&quot; → TPP.</li>
              <li>&quot;What drives thioester formation?&quot; → the coupled oxidation step, NOT ATP hydrolysis.</li>
            </ul>
          </Callout>
        </>
      )
    },

    // ================================================================
    // BLOCK 4 — CAC OVERVIEW
    // ================================================================
    {
      id: 'cac-overview',
      title: 'CAC Overview: 8 Reactions, Net Products',
      subtitle: 'The hub of intermediary metabolism',
      images: [],
      content: (
        <>
          <p>
            The citric acid cycle (CAC, Krebs, or TCA cycle) is an 8-reaction closed loop in the mitochondrial matrix
            that completely oxidizes one acetyl group to 2 CO<sub>2</sub>, capturing reducing equivalents as NADH and
            FADH<sub>2</sub>. The cycle does not consume its intermediates — they are catalytic and must be
            regenerated with each turn; if an intermediate is siphoned off for biosynthesis, it must be replaced by an
            anaplerotic reaction (block 8).
          </p>
          <p>
            Three reactions are essentially irreversible in the cell (steps 1, 3, 4), and these are the flux-control
            points. The other five are freely reversible. Step 5 couples thioester hydrolysis to substrate-level
            phosphorylation (GTP or ATP). Step 6 is the one cycle reaction that does NOT use soluble NAD+: succinate
            dehydrogenase uses covalently bound FAD and sits in the inner mitochondrial membrane as Complex II of the
            ETC — the only CAC enzyme that is also part of the ETC.
          </p>

          <h4 className="font-semibold mt-3">The 8 reactions</h4>
          <ol className="list-decimal ml-6 text-sm space-y-1">
            <li><b>Citrate synthase</b> — acetyl-CoA + oxaloacetate → citrate + CoA-SH (condensation; irreversible)</li>
            <li><b>Aconitase</b> — citrate ⇌ isocitrate (isomerization via cis-aconitate; Fe-S cluster)</li>
            <li><b>Isocitrate dehydrogenase (IDH)</b> — isocitrate + NAD+ → α-ketoglutarate + CO<sub>2</sub> + NADH (irreversible; first CO<sub>2</sub>)</li>
            <li><b>α-Ketoglutarate dehydrogenase complex</b> — α-KG + NAD+ + CoA → succinyl-CoA + CO<sub>2</sub> + NADH (irreversible; second CO<sub>2</sub>; PDH-like mechanism)</li>
            <li><b>Succinyl-CoA synthetase</b> — succinyl-CoA + GDP + Pi → succinate + GTP + CoA-SH (substrate-level phosphorylation)</li>
            <li><b>Succinate dehydrogenase (Complex II)</b> — succinate + FAD → fumarate + FADH<sub>2</sub> (membrane-bound; covalent FAD)</li>
            <li><b>Fumarase</b> — fumarate + H<sub>2</sub>O → L-malate (stereospecific <i>trans</i>-hydration)</li>
            <li><b>Malate dehydrogenase (MDH)</b> — malate + NAD+ → oxaloacetate + NADH (thermodynamically unfavorable; pulled forward by low [OAA])</li>
          </ol>

          <Card title="Net stoichiometry per turn">
            <p className="font-mono text-xs">
              Acetyl-CoA + 3 NAD+ + FAD + GDP + Pi + 2 H<sub>2</sub>O →<br />
              2 CO<sub>2</sub> + 3 NADH + FADH<sub>2</sub> + GTP + CoA + 3 H+
            </p>
          </Card>

          <Callout kind="info" title="How many CO2 per turn, and which carbons?">
            Two CO<sub>2</sub> are released per turn. Note that because succinate and fumarate are symmetric molecules,
            their "top" and "bottom" ends become chemically indistinguishable, so once carbons pass that point in the
            cycle they cannot be specifically traced to their original position.
          </Callout>

          <Callout kind="warn" title="Will GTP inhibit the CAC?">
            No direct allosteric effect — the CAC is mostly regulated by NADH, ATP, and substrate availability, not GTP.
            GTP is an end product of step 5 that is readily interconverted with ATP by nucleoside diphosphate kinase.
          </Callout>
        </>
      )
    },

    // ================================================================
    // BLOCK 5 — CITRATE SYNTHASE & ACONITASE
    // ================================================================
    {
      id: 'citrate-aconitase',
      title: 'Citrate Synthase & Aconitase',
      subtitle: 'Induced fit, acid-base catalysis, and a Fe-S cluster for isomerization',
      images: [
        {
          src: 'raw/cac_image14.jpeg',
          alt: 'Citrate synthase active-site mechanism. Asp375 acts as a base to deprotonate the methyl of acetyl-CoA, generating an enolate/carbanion that attacks the carbonyl carbon of oxaloacetate. A histidine protonates the oxaloacetate oxygen.',
          caption: 'Citrate synthase mechanism — an aspartate residue acts as the general base; a histidine protonates the oxaloacetate oxygen.'
        }
      ],
      content: (
        <>
          <p>
            Citrate synthase catalyzes the only C–C bond-forming reaction of the CAC: a Claisen-like aldol condensation
            between the methyl carbon of acetyl-CoA and the carbonyl carbon of oxaloacetate, generating citryl-CoA,
            which is then hydrolyzed to citrate + CoA-SH. The thioester hydrolysis is what makes the overall step
            strongly exergonic and essentially irreversible in vivo.
          </p>

          <h4 className="font-semibold mt-3">Induced fit — a key conceptual point</h4>
          <p>
            Free citrate synthase has an <b>open</b> conformation with no acetyl-CoA binding site. Oxaloacetate (OAA)
            binds first, triggering a large domain closure that (a) creates the acetyl-CoA binding site and (b) shields
            the reactive carbanion/enolate intermediate from bulk water. This strictly ordered, induced-fit mechanism
            means the enzyme is active only when OAA is present — it ensures that acetyl-CoA is not wasted on
            unproductive hydrolysis.
          </p>

          <h4 className="font-semibold mt-3">Catalysis — acid-base + covalent + proximity</h4>
          <p className="text-sm">
            An <b>Asp</b> residue acts as a general base, abstracting a proton from the methyl of acetyl-CoA to generate
            the nucleophilic enolate/carbanion. A <b>His</b> residue donates a proton to the oxaloacetate carbonyl oxygen.
            The enolate attacks the OAA carbonyl carbon, forming citryl-CoA. Water then hydrolyzes the thioester to
            release CoA-SH and citrate.
          </p>

          <h4 className="font-semibold mt-3">Aconitase — dehydration / rehydration</h4>
          <p>
            Citrate is a tertiary alcohol and a poor oxidation substrate. Aconitase isomerizes citrate to isocitrate (a
            secondary alcohol, good substrate) in two steps: (1) dehydration to <i>cis</i>-aconitate, (2) stereospecific
            hydration back to isocitrate with the OH on the adjacent carbon.
          </p>
          <p>
            Aconitase uses a <b>[4Fe–4S] iron-sulfur cluster</b> in its active site — but not for electron transfer!
            Three Cys residues coordinate three of the Fe atoms; the fourth Fe is exposed and binds the substrate
            hydroxyl/carboxylate groups, acting as a Lewis acid to facilitate the dehydration and stereospecific
            rehydration. A basic residue positions the substrate.
          </p>
          <Callout kind="tip" title="Fe-S cluster function here">
            This is a rare case of a Fe-S cluster doing <b>substrate binding / Lewis acid catalysis</b> rather than
            electron transfer. Contrast with Complex I / Complex II / Complex III where Fe-S clusters shuttle electrons.
          </Callout>
        </>
      )
    },

    // ================================================================
    // BLOCK 6 — FOUR REDOX STEPS
    // ================================================================
    {
      id: 'cac-redox',
      title: 'The 4 Redox Steps: IDH, α-KG DH, Succinate DH, Malate DH',
      subtitle: 'Where the cycle\'s reducing power is harvested',
      images: [
        {
          src: 'raw/cac_image24.png',
          alt: 'NAD+ / NADH redox chemistry. The nicotinamide ring accepts a hydride (2e- + 1H+) at C4, with the second proton released to solvent.',
          caption: 'NAD+ + 2 e- + 2 H+ → NADH + H+. Soluble co-substrate for IDH, α-KG DH, and MDH.'
        },
        {
          src: 'raw/cac_image9.png',
          alt: 'FAD structure with isoalloxazine ring. The N5 and C4a positions are the reactive sites that accept two electrons and two protons to form FADH2.',
          caption: 'FAD + 2 e- + 2 H+ → FADH2. Covalently bound prosthetic group on succinate dehydrogenase.'
        }
      ],
      content: (
        <>
          <p>
            Four of the eight CAC reactions are redox reactions — they reduce a cofactor. Three of them reduce NAD+;
            one reduces FAD.
          </p>

          <Table
            headers={['Step', 'Enzyme', 'Redox cofactor', 'Oxidation chemistry']}
            rows={[
              ['3', 'Isocitrate dehydrogenase (IDH)', 'NAD+ → NADH', 'Secondary alcohol → ketone + oxidative decarboxylation (CO2 released)'],
              ['4', 'α-Ketoglutarate DH complex', 'NAD+ → NADH', 'Oxidative decarboxylation (CO2 released); PDH-like mechanism'],
              ['6', 'Succinate DH (Complex II)', 'FAD → FADH2', 'Alkane → alkene (dehydrogenation between two CH2 groups)'],
              ['8', 'Malate DH', 'NAD+ → NADH', 'Secondary alcohol → ketone']
            ]}
          />

          <h4 className="font-semibold mt-3">Why FAD (not NAD+) at succinate dehydrogenase?</h4>
          <p>
            The succinate → fumarate conversion is an alkane-to-alkene dehydrogenation (two CH<sub>2</sub> → CH=CH),
            which has too small a free-energy change to reduce NAD+. FAD has a more positive E°&apos; (more willing
            electron acceptor) and can handle this less energetic oxidation. Additionally, FAD is covalently bound so
            its electrons stay with the enzyme and feed directly into the ETC at coenzyme Q.
          </p>

          <h4 className="font-semibold mt-3">Why are all 4 steps indirectly O<sub>2</sub>-dependent?</h4>
          <p>
            None of these reactions uses molecular O<sub>2</sub> as a substrate — yet all four stop under anaerobic
            conditions. The reason: each requires an <b>oxidized</b> cofactor (NAD+ or FAD) to proceed. NAD+ and FAD are
            regenerated by the ETC, which passes the electrons ultimately to O<sub>2</sub>. When O<sub>2</sub> is
            absent, the ETC backs up, NADH and FADH<sub>2</sub> accumulate, NAD+ and FAD become scarce, and the CAC
            grinds to a halt.
          </p>
          <Callout kind="info" title="Kahoot-style question">
            &quot;How is NAD+ regenerated to keep the CAC running?&quot; → by respiration (ETC re-oxidizes NADH) or, for
            short bursts in muscle, by fermentation (lactate dehydrogenase regenerates NAD+ from cytosolic NADH).
          </Callout>

          <h4 className="font-semibold mt-3">Why does MDH run forward?</h4>
          <p>
            Malate → OAA has a very positive standard ΔG&apos;° (~+29 kJ/mol) — intrinsically unfavorable. It runs
            forward in vivo because oxaloacetate is kept at very low concentration: citrate synthase consumes OAA as
            fast as it is made. Le Chatelier&apos;s principle pulls MDH to the right. This is a well-known example of
            thermodynamic coupling via product removal.
          </p>
          <Callout kind="warn" title="Key point">
            If asked &quot;how does the malate dehydrogenase step proceed forward despite being thermodynamically
            unfavorable?&quot; — the answer is <b>low [OAA] driven by citrate synthase consumption</b>.
          </Callout>
        </>
      )
    },

    // ================================================================
    // BLOCK 7 — SLP & SYMMETRIC INTERMEDIATES
    // ================================================================
    {
      id: 'slp-cac',
      title: 'Substrate-Level Phosphorylation & Symmetric Intermediates',
      subtitle: 'Succinyl-CoA → GTP; succinate and fumarate are symmetric',
      images: [],
      content: (
        <>
          <h4 className="font-semibold">Substrate-level phosphorylation (step 5)</h4>
          <p>
            Succinyl-CoA synthetase couples the hydrolysis of the high-energy succinyl-CoA thioester to the
            phosphorylation of GDP (or ADP, depending on isozyme). The mechanism proceeds via a succinyl-phosphate
            intermediate, then a phospho-histidine intermediate on the enzyme, before phosphorylating GDP to GTP. GTP
            is freely interconverted with ATP by nucleoside diphosphate kinase (GTP + ADP ⇌ GDP + ATP).
          </p>
          <Callout kind="info" title="Two types of phosphorylation">
            <b>Substrate-level phosphorylation</b> = direct transfer of a phosphate from a high-energy substrate to
            ADP/GDP (glycolysis steps 7 &amp; 10, CAC step 5). <b>Oxidative phosphorylation</b> = ATP synthesis driven
            by a proton gradient across the IMM generated by the ETC (chapter 3).
          </Callout>

          <h4 className="font-semibold mt-4">Symmetric intermediates: succinate &amp; fumarate</h4>
          <p>
            Succinate and fumarate are <b>symmetric</b> molecules — their &quot;top&quot; and &quot;bottom&quot; ends
            are chemically indistinguishable. Because of this symmetry, once the 2-carbon group derived from acetate
            passes into succinate (and fumarate) it can no longer be specifically assigned to one end of the molecule
            (Lehninger notes this on Fig. 16-7). This is a key conceptual point about the structure of the cycle.
          </p>
        </>
      )
    },

    // ================================================================
    // BLOCK 8 — ANAPLEROTIC & ANABOLIC
    // ================================================================
    {
      id: 'anaplerotic',
      title: 'Anaplerotic Reactions & Anabolic Roles',
      subtitle: 'Refilling the cycle and feeding biosynthesis',
      images: [],
      content: (
        <>
          <p>
            CAC intermediates are not only catalytic — they are also biosynthetic precursors. Citrate is exported for
            fatty acid synthesis; α-KG feeds amino acid and neurotransmitter synthesis (glutamate, GABA); succinyl-CoA
            is used for heme; OAA is used for gluconeogenesis and aspartate synthesis. Every intermediate drawn off
            must be <b>replenished</b> — otherwise the cycle would stall. Reactions that replenish CAC intermediates
            are called <b>anaplerotic</b> (Greek, &quot;to fill up&quot;).
          </p>

          <h4 className="font-semibold mt-3">Four key anaplerotic reactions</h4>
          <Table
            headers={['Reaction', 'Enzyme', 'CAC intermediate replenished']}
            rows={[
              ['Pyruvate + CO2 + ATP → OAA', 'Pyruvate carboxylase (biotin)', 'Oxaloacetate'],
              ['PEP + CO2 + GDP → OAA + GTP', 'PEP carboxykinase (reverse)', 'Oxaloacetate'],
              ['Pyruvate + CO2 + NADPH → malate', 'Malic enzyme', 'Malate'],
              ['Glutamate → α-KG (transamination) or glutamate DH', 'Aminotransferase / GDH', 'α-Ketoglutarate']
            ]}
          />

          <h4 className="font-semibold mt-3">Pyruvate carboxylase — the master anaplerotic enzyme</h4>
          <p>
            Pyruvate + HCO<sub>3</sub><sup>−</sup> + ATP → OAA + ADP + Pi. Uses biotin as a covalent CO<sub>2</sub>
            carrier. <b>Activated by acetyl-CoA</b> — this is brilliant: when acetyl-CoA piles up (fasting, high fat
            intake), the cell signals that it needs more OAA to condense with it, and pyruvate carboxylase responds by
            making OAA. If OAA is high enough to also fuel gluconeogenesis (low insulin), pyruvate carboxylase is
            active; if energy is plentiful, OAA feeds the CAC instead.
          </p>

          <h4 className="font-semibold mt-3">Transamination and the amino-acid / CAC axis</h4>
          <p>
            α-Ketoglutarate and oxaloacetate are the two great &quot;amino-group sinks&quot; of the cell.
          </p>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li><b>α-KG + Ala → Glu + Pyruvate</b> (ALT / alanine aminotransferase)</li>
            <li><b>α-KG + Asp → Glu + OAA</b> (AST / aspartate aminotransferase)</li>
            <li>Glutamate → α-KG + NH<sub>4</sub><sup>+</sup> (glutamate dehydrogenase; oxidative deamination)</li>
            <li>Glutamate → GABA via Glu decarboxylase (requires PLP / vitamin B6)</li>
          </ul>

          <Callout kind="info" title="Kahoot-style &quot;which is anaplerotic?&quot;">
            <b>Carboxylation of pyruvate to make OAA</b> is anaplerotic.
            &quot;α-KG → succinyl-CoA&quot; is part of the CAC itself (not anaplerotic).
            &quot;Acetyl + OAA → citrate&quot; is the CAC entry (not anaplerotic).
            &quot;OAA → aspartate&quot; is <b>cataplerotic</b> (draws material OUT).
          </Callout>

          <Callout kind="tip" title="Why are CAC-enzyme-deficient humans so rare?">
            Because intermediates feed essential biosynthesis of amino acids, heme, and glucose, a complete loss of any
            CAC enzyme is almost always embryonic-lethal. Only partial-activity mutations survive. (From class
            discussion question.)
          </Callout>
        </>
      )
    },

    // ================================================================
    // BLOCK 9 — REGULATION
    // ================================================================
    {
      id: 'regulation',
      title: 'PDH & CAC Regulation',
      subtitle: 'Covalent PTM, allostery, feedback inhibition, and Ca²⁺ in muscle',
      images: [],
      content: (
        <>
          <p>
            Both PDH and the CAC are regulated to match the cell&apos;s energy state. When ATP and NADH are abundant,
            the pathway slows; when they are low (high ADP, high NAD+), it accelerates. Three regulatory layers combine:
            covalent modification, allosteric effectors, and substrate availability. In muscle, Ca<sup>2+</sup> adds a
            fourth layer that couples energy-yielding metabolism to contraction.
          </p>

          <h4 className="font-semibold mt-4">(a) PDH covalent regulation — kinase/phosphatase</h4>
          <p>
            The PDH complex has two built-in regulatory subunits:
          </p>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li><b>PDH kinase (PDK)</b> phosphorylates a specific Ser on E1 → PDH is <b>inactive</b>. Activated by
              high ATP, NADH, and acetyl-CoA (signals of energy sufficiency).</li>
            <li><b>PDH phosphatase (PDP)</b> removes the phosphate → PDH is <b>active</b>. Activated by
              Ca<sup>2+</sup> and Mg<sup>2+</sup>; insulin signaling also favors dephosphorylation.</li>
          </ul>
          <Callout kind="info" title="Big picture">
            PDH is OFF in the fasted, energy-sufficient state (high ATP / NADH / acetyl-CoA), preventing further carbon
            commitment. It is ON in the fed or working state (high Ca<sup>2+</sup> in muscle, insulin in adipose &amp; liver).
          </Callout>

          <h4 className="font-semibold mt-4">(b) PDH allosteric regulation</h4>
          <Table
            headers={['Effector', 'Effect on PDH']}
            rows={[
              ['ATP, NADH, acetyl-CoA, fatty acids', 'Inhibit (also activate PDK)'],
              ['ADP, NAD+, CoA-SH, pyruvate', 'Activate (also inhibit PDK)'],
              ['Ca2+ (muscle)', 'Activates PDP → activates PDH'],
              ['Insulin (adipose, liver)', 'Activates PDP → activates PDH']
            ]}
          />

          <h4 className="font-semibold mt-4">(c) CAC feedback regulation</h4>
          <p>The three irreversible steps (1, 3, 4) plus step 6 are regulated nodes.</p>
          <Table
            headers={['Enzyme', 'Inhibitors', 'Activators']}
            rows={[
              ['Citrate synthase (step 1)', 'NADH, succinyl-CoA, citrate, ATP', '(substrate availability: OAA, acetyl-CoA)'],
              ['Isocitrate DH (step 3)', 'NADH, ATP', 'ADP, Ca2+'],
              ['α-KG DH complex (step 4)', 'NADH, succinyl-CoA, ATP', 'Ca2+'],
              ['Succinate DH (step 6)', 'Oxaloacetate', 'succinate, ubiquinone']
            ]}
          />
          <Callout kind="tip" title="NADH blocks THREE steps">
            NADH inhibits IDH, α-KG DH, and (indirectly) citrate synthase. A rapid rise in [NADH]/[NAD+] slows the
            cycle — exactly what you expect under low O<sub>2</sub> or high energy charge.
          </Callout>
          <Callout kind="tip" title="Succinyl-CoA blocks TWO early steps">
            Succinyl-CoA, a CAC intermediate itself, feeds back on <b>citrate synthase</b> and <b>α-KG DH</b> —
            canonical end-product-like inhibition that prevents runaway accumulation.
          </Callout>

          <h4 className="font-semibold mt-4">(d) Calcium activation in working muscle</h4>
          <p>
            When a muscle fires, cytosolic Ca<sup>2+</sup> rises. Ca<sup>2+</sup> enters the mitochondrion and
            <b> activates PDH phosphatase, IDH, and α-KG DH</b> — exactly the three steps most tightly coupled to NADH
            production. This elegant coupling means that contraction itself accelerates ATP synthesis to replace the
            ATP being consumed. No separate signaling cascade is required.
          </p>

          <h4 className="font-semibold mt-4">&quot;Negative allostery ≠ No positive allostery&quot;</h4>
          <p>
            A CAC enzyme can be inhibited by one ligand AND activated by another at the same time. For example, IDH is
            inhibited by NADH and ATP <b>and</b> activated by ADP and Ca<sup>2+</sup>. Allosteric effects are
            site-specific — negative at one site does not preclude positive at another.
          </p>

          <Callout kind="info" title="Summary of the question &quot;What happens if NADH/NAD+ rises rapidly?&quot;">
            The CAC slows sharply — NADH directly inhibits IDH and α-KG DH; low NAD+ starves IDH, α-KG DH, and MDH of
            their co-substrate; and high NADH stalls the ETC so FAD regeneration also slows. Acetyl-CoA and citrate
            accumulate, feeding back to inhibit PDH and citrate synthase.
          </Callout>
        </>
      )
    }
  ],

  // ================================================================
  // KEY REVIEW
  // ================================================================
  keyReview: {
    vocab: [
      { term: 'Pyruvate dehydrogenase complex (PDH / PDC)', def: 'Mitochondrial matrix multienzyme complex (E1, E2, E3) that oxidatively decarboxylates pyruvate to acetyl-CoA.', tag: 'COMPLEX', tagColor: 'sky' },
      { term: 'Thiamine pyrophosphate (TPP)', def: 'Prosthetic group on E1 derived from vitamin B1; stabilizes the hydroxyethyl carbanion during decarboxylation.', tag: 'VIT B1', tagColor: 'amber' },
      { term: 'Lipoyllysine', def: 'Lipoic acid covalently amide-linked to a Lys on E2; the swinging-arm prosthetic group that channels the acetyl intermediate.', tag: 'ARM', tagColor: 'emerald' },
      { term: 'CoA-SH', def: 'Coenzyme A; thiol-containing co-substrate (vitamin B5/pantothenate) that carries acetyl groups as a high-energy thioester.', tag: 'VIT B5', tagColor: 'amber' },
      { term: 'FAD', def: 'Flavin adenine dinucleotide (vitamin B2); 2-electron carrier, used by E3 of PDH and by succinate DH (where it is covalently bound).', tag: 'VIT B2', tagColor: 'amber' },
      { term: 'NAD+', def: 'Nicotinamide adenine dinucleotide (vitamin B3/niacin); soluble 2-electron carrier (accepts a hydride); co-substrate for IDH, α-KG DH, MDH, and PDH.', tag: 'VIT B3', tagColor: 'amber' },
      { term: 'Substrate channeling', def: 'Direct hand-off of a reactive intermediate between active sites of a multienzyme complex without release to bulk solvent; exemplified by PDH lipoyl arm.', tag: 'CONCEPT', tagColor: 'indigo' },
      { term: 'Acetyl-CoA', def: 'Central 2-carbon metabolite; thioester that enters the CAC via citrate synthase; also from β-oxidation and ketogenic amino acids.', tag: 'METAB', tagColor: 'rose' },
      { term: 'Citrate synthase', def: 'CAC step 1; condenses acetyl-CoA with OAA to form citrate; only C–C bond-forming step; induced fit by OAA binding first.', tag: 'CAC-1', tagColor: 'sky' },
      { term: 'Induced fit', def: 'Conformational change triggered by substrate binding that creates or optimizes the active site; citrate synthase closes upon OAA binding to create acetyl-CoA site.', tag: 'CONCEPT', tagColor: 'indigo' },
      { term: 'Aconitase', def: 'CAC step 2; isomerizes citrate ⇌ isocitrate via cis-aconitate; uses a [4Fe-4S] cluster as a Lewis-acid catalyst.', tag: 'CAC-2', tagColor: 'sky' },
      { term: 'Iron-sulfur cluster', def: 'Inorganic Fe-S prosthetic group; usually for e- transfer (Complexes I, II, III), but in aconitase it acts as a Lewis acid for substrate binding.', tag: 'COFACTOR', tagColor: 'slate' },
      { term: 'Isocitrate dehydrogenase (IDH)', def: 'CAC step 3; oxidative decarboxylation of isocitrate → α-KG + CO2 + NADH; major CAC flux-control point; allosterically activated by ADP, Ca2+; inhibited by NADH, ATP.', tag: 'CAC-3', tagColor: 'sky' },
      { term: 'α-Ketoglutarate dehydrogenase complex', def: 'CAC step 4; oxidative decarboxylation of α-KG → succinyl-CoA + CO2 + NADH; same cofactors and mechanism as PDH.', tag: 'CAC-4', tagColor: 'sky' },
      { term: 'Succinyl-CoA synthetase', def: 'CAC step 5; couples succinyl-CoA thioester hydrolysis to GDP → GTP (substrate-level phosphorylation); via phospho-His intermediate.', tag: 'CAC-5', tagColor: 'sky' },
      { term: 'Substrate-level phosphorylation', def: 'Direct phosphoryl transfer from a high-energy substrate to ADP/GDP; occurs in glycolysis (steps 7, 10) and CAC step 5.', tag: 'MECH', tagColor: 'emerald' },
      { term: 'Succinate dehydrogenase (Complex II)', def: 'CAC step 6; oxidizes succinate → fumarate using covalently bound FAD; the only membrane-embedded CAC enzyme; part of the ETC.', tag: 'CAC-6', tagColor: 'sky' },
      { term: 'Fumarase', def: 'CAC step 7; stereospecific trans-hydration of fumarate → L-malate; reversible.', tag: 'CAC-7', tagColor: 'sky' },
      { term: 'Malate dehydrogenase (MDH)', def: 'CAC step 8; oxidizes malate → OAA + NADH; thermodynamically unfavorable in isolation but pulled forward by low [OAA] (citrate synthase consumption).', tag: 'CAC-8', tagColor: 'sky' },
      { term: 'Oxaloacetate (OAA)', def: '4-carbon dicarboxylate; starting substrate of citrate synthase and end product of MDH; also entry/exit point for anaplerosis (pyruvate carboxylase) and aspartate synthesis.', tag: 'INTERMED', tagColor: 'rose' },
      { term: 'Anaplerotic reaction', def: 'Reaction that replenishes a depleted CAC intermediate; e.g., pyruvate carboxylase (→OAA), glutamate DH (→α-KG), aminotransferases.', tag: 'CONCEPT', tagColor: 'indigo' },
      { term: 'Transamination', def: 'Transfer of an α-amino group from an amino acid to an α-keto acid via PLP (vitamin B6); e.g., Glu + OAA ⇌ α-KG + Asp (AST).', tag: 'MECH', tagColor: 'emerald' },
      { term: 'Pyruvate carboxylase', def: 'Biotin-dependent ligase; pyruvate + CO2 + ATP → OAA; activated by acetyl-CoA; major anaplerotic enzyme.', tag: 'ENZ', tagColor: 'sky' },
      { term: 'PDH kinase (PDK)', def: 'Phosphorylates/inactivates PDH E1; activated by ATP, NADH, acetyl-CoA (energy-sufficient signals).', tag: 'REG', tagColor: 'rose' },
      { term: 'PDH phosphatase (PDP)', def: 'Dephosphorylates/activates PDH; activated by Ca2+, Mg2+, insulin (energy-demand or fed signals).', tag: 'REG', tagColor: 'rose' },
      { term: 'Prosthetic group vs. cofactor vs. substrate', def: 'Prosthetic group = tightly / covalently bound to enzyme (e.g., TPP, FAD, lipoyllysine). Co-substrate / cofactor = binds, reacts, leaves (e.g., NAD+, CoA-SH). Substrate = reactant that is permanently transformed and released as product (pyruvate, acetyl-CoA).', tag: 'CONCEPT', tagColor: 'indigo' }
    ],
    laws: [
      { name: 'PDH net reaction', desc: 'Pyruvate + CoA-SH + NAD+ → Acetyl-CoA + CO2 + NADH. Irreversible (ΔG′° ≈ −33.4 kJ/mol). First carbon of glucose fully oxidized.' },
      { name: 'CAC net reaction (per turn)', desc: 'Acetyl-CoA + 3 NAD+ + FAD + GDP + Pi + 2 H2O → 2 CO2 + 3 NADH + FADH2 + GTP + CoA + 3 H+.' },
      { name: '4 redox steps in CAC', desc: 'IDH (NAD+), α-KG DH (NAD+), succinate DH (FAD), MDH (NAD+). All indirectly O2-dependent because oxidized cofactor must be regenerated by the ETC.' },
      { name: 'Symmetric intermediates rule', desc: 'Succinate and fumarate are symmetric molecules. At this point in the cycle the two ends of the molecule become chemically indistinguishable — a structural feature of the CAC noted in Lehninger Fig. 16-7.' },
      { name: 'Three-signal energy-charge rule', desc: 'PDH and CAC are inhibited by high [ATP]/[ADP], high [NADH]/[NAD+], and high [acetyl-CoA]/[CoA-SH]. All three ratios reflect energy sufficiency.' },
      { name: 'Malate DH thermodynamic coupling', desc: 'ΔG′° for malate → OAA is very positive (~+29 kJ/mol), but low [OAA] maintained by citrate synthase pulls the reaction forward (Le Chatelier).' }
    ],
    methods: [
      { name: 'Trace the PDH cofactor cycle', expand: 'T→L→C→F→N', desc: 'TPP (decarboxylation) → Lipoyllysine (swinging arm) → CoA-SH (acetyl pickup) → FAD (re-oxidize lipoyl) → NAD+ (final electron sink).' },
      { name: 'Identify redox steps in CAC', expand: '3-4-6-8', desc: 'Steps 3, 4, 6, 8 are the four redox reactions. Steps 3, 4, 8 use NAD+; step 6 uses FAD.' },
      { name: 'Spot the regulated step', expand: 'ΔG′° ≈ 0 check', desc: 'Regulated/irreversible steps have large negative in vivo ΔG. In the CAC: citrate synthase (1), IDH (3), α-KG DH (4). Reversible steps near equilibrium are NOT major control points.' },
      { name: 'Tell prosthetic from substrate', expand: 'Stays vs. leaves', desc: 'If it stays bound after catalysis → prosthetic group (TPP, lipoyllysine, FAD). If it diffuses away → co-substrate (NAD+, CoA-SH). If it is chemically transformed to a product → substrate (pyruvate, acetyl-CoA).' }
    ],
    diagrams: []
  },

  // ================================================================
  // QUESTIONS (~20)
  // ================================================================
  questions: [
    {
      q: 'Which principle is NOT illustrated by the pyruvate dehydrogenase complex?',
      type: 'mcq',
      choices: [
        'Substrate channeling via a swinging-arm prosthetic group',
        'Recycling of NAD+ via the electron transport chain',
        'Drive of thioester formation by ATP hydrolysis',
        'Covalent regulation by phosphorylation'
      ],
      correct: 2,
      difficulty: 'M',
      explanation: 'PDH does NOT hydrolyze ATP. The high-energy acetyl-CoA thioester is produced by the coupled oxidation of hydroxyethyl-TPP and transfer to lipoyllysine — no ATP is consumed or produced in the PDH reaction.',
      chapter: 'PDH & CAC'
    },
    {
      q: 'Where is the pyruvate dehydrogenase complex located in eukaryotic cells?',
      type: 'mcq',
      choices: [
        'Cytosol',
        'Mitochondrial intermembrane space',
        'Mitochondrial matrix',
        'Embedded in the inner mitochondrial membrane'
      ],
      correct: 2,
      difficulty: 'E',
      explanation: 'PDH is a soluble multienzyme complex in the mitochondrial matrix. Pyruvate is imported from the cytosol by a pyruvate transporter. Only succinate dehydrogenase (Complex II) of the CAC is embedded in the inner mitochondrial membrane.',
      chapter: 'PDH & CAC'
    },
    {
      q: 'Which of the following is a redox reaction in the citric acid cycle?',
      type: 'mcq',
      choices: [
        'Citrate → isocitrate (aconitase)',
        'Isocitrate → α-ketoglutarate (isocitrate dehydrogenase)',
        'Succinyl-CoA → succinate (succinyl-CoA synthetase)',
        'Fumarate → malate (fumarase)'
      ],
      correct: 1,
      difficulty: 'E',
      explanation: 'IDH oxidizes the secondary alcohol of isocitrate to a ketone and simultaneously decarboxylates, reducing NAD+ to NADH. Aconitase is a dehydration/rehydration (isomerization), succinyl-CoA synthetase is a substrate-level phosphorylation, and fumarase is a hydration — none of these are redox.',
      chapter: 'PDH & CAC'
    },
    {
      q: 'Which reaction is anaplerotic?',
      type: 'mcq',
      choices: [
        'α-Ketoglutarate → succinyl-CoA',
        'Acetyl-CoA + oxaloacetate → citrate',
        'Pyruvate + CO2 + ATP → oxaloacetate',
        'Oxaloacetate → aspartate'
      ],
      correct: 2,
      difficulty: 'M',
      explanation: 'Pyruvate carboxylase replenishes OAA from pyruvate — the textbook anaplerotic reaction. α-KG → succinyl-CoA is a CAC step itself; acetyl + OAA → citrate is CAC entry; OAA → aspartate is cataplerotic (drains the cycle).',
      chapter: 'PDH & CAC'
    },
    {
      q: 'Which amino acid, when transaminated, directly produces glutamate (thereby feeding α-ketoglutarate into/out of the CAC)?',
      type: 'mcq',
      choices: ['Alanine', 'Aspartate', 'Both alanine and aspartate', 'Neither — glutamate is made only by glutamate dehydrogenase'],
      correct: 2,
      difficulty: 'M',
      explanation: 'Both ALT (Ala + α-KG ⇌ Pyr + Glu) and AST (Asp + α-KG ⇌ OAA + Glu) produce glutamate from α-ketoglutarate by transamination. Glutamate dehydrogenase is a separate oxidative deamination.',
      chapter: 'PDH & CAC'
    },
    {
      q: 'How would the CAC respond to a rapid increase in the [NADH]/[NAD+] ratio?',
      type: 'mcq',
      choices: [
        'Speed up — more reducing equivalents means more energy flow.',
        'Slow down — NADH directly inhibits IDH and α-KG DH, and low NAD+ starves the NAD+-dependent steps.',
        'No change — the CAC is regulated only by ATP, not by NADH.',
        'Run in reverse, regenerating acetyl-CoA from OAA.'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'A high NADH/NAD+ ratio signals energy sufficiency. NADH allosterically inhibits citrate synthase, IDH, and α-KG DH. Low NAD+ also starves IDH, α-KG DH, and MDH of their oxidized co-substrate. The net effect is a sharp slowdown.',
      chapter: 'PDH & CAC'
    },
    {
      q: 'Why does the malate dehydrogenase step (malate → OAA + NADH) proceed forward in vivo despite having a large positive standard free energy change?',
      type: 'mcq',
      choices: [
        'It is coupled to ATP hydrolysis.',
        'Citrate synthase consumes OAA rapidly, keeping [OAA] very low and pulling MDH forward by Le Chatelier.',
        'MDH uses FAD instead of NAD+ inside the cell.',
        'The reaction is catalyzed near equilibrium and therefore is spontaneous under standard conditions.'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'Continuous removal of OAA by citrate synthase keeps [OAA] at very low steady-state, shifting the actual ΔG of the MDH reaction to negative values. This is a product-removal / mass-action pull — no ATP is coupled.',
      chapter: 'PDH & CAC'
    },
    {
      q: 'Why is E3 necessary in the PDH complex if CO2 is already released at E1 and acetyl-CoA is already released at E2?',
      type: 'mcq',
      choices: [
        'E3 hydrolyzes ATP to drive the reaction.',
        'E3 re-oxidizes dihydrolipoyllysine back to the oxidized disulfide form so the complex can run another cycle.',
        'E3 transfers the acetyl group from lipoate to CoA.',
        'E3 releases the second CO2 from acetyl-CoA.'
      ],
      correct: 1,
      difficulty: 'M',
      explanation: 'After E2 transfers the acetyl group to CoA, the lipoyl arm is stuck in the reduced (–SH, –SH) form. E3 uses FAD (then NAD+) to regenerate the lipoyl disulfide — without E3, the complex would only fire once.',
      chapter: 'PDH & CAC'
    },
    {
      q: 'Which PDH cofactor is derived from vitamin B1 (thiamine) and is responsible for the decarboxylation of pyruvate?',
      type: 'mcq',
      choices: ['FAD', 'NAD+', 'Thiamine pyrophosphate (TPP)', 'Coenzyme A', 'Lipoyllysine'],
      correct: 2,
      difficulty: 'E',
      explanation: 'TPP, made from vitamin B1 (thiamine), is the E1 prosthetic group. Its thiazolium ring stabilizes the hydroxyethyl carbanion generated when C1 of pyruvate leaves as CO2.',
      chapter: 'PDH & CAC'
    },
    {
      q: 'Succinate dehydrogenase uses FAD rather than NAD+ because:',
      type: 'mcq',
      choices: [
        'FAD has a more positive standard reduction potential, allowing it to accept electrons from the less energetic alkane-to-alkene dehydrogenation.',
        'NAD+ cannot cross the inner mitochondrial membrane.',
        'FAD is smaller and can fit into the enzyme active site.',
        'FAD is only required in the cytosol.'
      ],
      correct: 0,
      difficulty: 'H',
      explanation: 'The succinate → fumarate oxidation has a small ΔE that is insufficient to reduce NAD+. FAD, with its more positive E°′, can accept these electrons. Because succinate DH is membrane-embedded (Complex II), the FAD is also covalently tethered so its electrons feed directly into Coenzyme Q.',
      chapter: 'PDH & CAC'
    },
    {
      q: 'List the five different coenzymes/prosthetic groups of the pyruvate dehydrogenase complex.',
      type: 'short',
      correct: ['TPP', 'thiamine pyrophosphate', 'lipoyllysine', 'lipoate', 'lipoic acid', 'CoA', 'CoA-SH', 'coenzyme A', 'FAD', 'NAD+'],
      difficulty: 'M',
      explanation: 'The five cofactors are: TPP (on E1), lipoyllysine (on E2), CoA-SH (co-substrate), FAD (on E3), and NAD+ (co-substrate). TPP, lipoyllysine, and FAD are prosthetic groups; CoA-SH and NAD+ are co-substrates.',
      chapter: 'PDH & CAC'
    },
    {
      q: 'Which functional group on Coenzyme A captures the acetyl group during the PDH reaction?',
      type: 'short',
      correct: ['thiol', 'sulfhydryl', '-SH', 'SH', 'sulfur'],
      difficulty: 'E',
      explanation: 'CoA-SH uses its terminal thiol (–SH, from the β-mercaptoethylamine portion) to form a thioester with the acetyl group. Thioesters store the energy released during the PDH oxidation.',
      chapter: 'PDH & CAC'
    },
    {
      q: 'True or false: All flux-regulating enzymes of the CAC have large negative standard free-energy changes under cellular conditions.',
      type: 'tf',
      choices: ['True', 'False'],
      correct: 0,
      difficulty: 'M',
      explanation: 'True. Citrate synthase, IDH, and α-KG DH are all essentially irreversible in vivo (large negative ΔG) — which is exactly why they are the flux-control points. Reactions near equilibrium cannot control flux.',
      chapter: 'PDH & CAC'
    },
    {
      q: 'True or false: If an enzyme undergoes negative allosteric regulation by one ligand, it cannot also be positively regulated by a different ligand.',
      type: 'tf',
      choices: ['True', 'False'],
      correct: 1,
      difficulty: 'M',
      explanation: 'False. Allosteric effects are site-specific. A single enzyme often has multiple allosteric sites: e.g., IDH is inhibited by NADH and ATP AND activated by ADP and Ca2+ simultaneously. Negative regulation at one site does not preclude positive regulation at another.',
      chapter: 'PDH & CAC'
    },
    {
      q: 'True or false: NADH is a key allosteric regulator of both the pyruvate dehydrogenase complex and the citric acid cycle.',
      type: 'tf',
      choices: ['True', 'False'],
      correct: 0,
      difficulty: 'E',
      explanation: 'True. NADH allosterically inhibits PDH (and activates PDH kinase), and it inhibits citrate synthase, isocitrate dehydrogenase, and α-KG dehydrogenase in the CAC. A rising NADH/NAD+ ratio is a central &quot;slow down&quot; signal for energy metabolism.',
      chapter: 'PDH & CAC'
    },
    {
      q: 'In muscle, a sudden rise in cytosolic Ca²⁺ during contraction stimulates mitochondrial ATP production. Which of the following is NOT a direct Ca²⁺-activated target?',
      type: 'mcq',
      choices: [
        'PDH phosphatase (which then activates PDH)',
        'Isocitrate dehydrogenase',
        'α-Ketoglutarate dehydrogenase',
        'Succinyl-CoA synthetase'
      ],
      correct: 3,
      difficulty: 'H',
      explanation: 'Ca²⁺ directly activates PDH phosphatase (→active PDH), IDH, and α-KG DH — exactly the three steps most tightly coupled to NADH production. Succinyl-CoA synthetase is not a Ca²⁺-regulated enzyme.',
      chapter: 'PDH & CAC'
    }
  ]
};
