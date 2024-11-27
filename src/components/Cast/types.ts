import sarahJones from '../../assets/images/cast/modern/sarah-jones.jpg';
import amiraHassan from '../../assets/images/cast/modern/amira-hassan.jpg';
import drLaporte from '../../assets/images/cast/modern/dr-laporte.jpg';
import jodyMathews from '../../assets/images/cast/modern/jody-mathews.jpg';
import maryMagdalene from '../../assets/images/cast/historical/mary-magdalene.jpg';
import martha from '../../assets/images/cast/historical/martha.jpg';
import rebecca from '../../assets/images/cast/historical/rebecca.jpg';
import susanna from '../../assets/images/cast/historical/susanna.jpg';
import simonPeter from '../../assets/images/cast/historical/simon-peter.jpg';
import jesus from '../../assets/images/cast/historical/jesus.jpg';

export interface Character {
  id: string;
  name: string;
  description: string;
  briefRole: string;
  fullDescription: string[];
  image: string;
  timeline: 'modern' | 'historical';
  relationships: string[];
}

// Modern Timeline Characters
const modernCharacters: Character[] = [
  {
    id: 'sarah-jones',
    name: 'DR. SARAH GERTRUDE JONES',
    briefRole: 'Brilliant religious historian uncovering revolutionary truth',
    description: 'A brilliant religious historian with a unique interdisciplinary approach combining archaeology, gender studies, and religious history.',
    fullDescription: [
      'A brilliant religious historian with a unique interdisciplinary approach combining archaeology, gender studies, and religious history. Despite her academic success, Sarah struggles with spiritual skepticism and impostor syndrome.',
      'Named after Gertrude Bell by her English mother, she feels constant pressure to live up to her namesake\'s legacy. Her discovery of Jesus\' proclamation about women\'s spiritual equality forces her to confront not just external opposition but her own long-buried yearning for spiritual meaning.'
    ],
    image: sarahJones,
    timeline: 'modern',
    relationships: ['Dr. Amira Hassan - Unexpected ally at Oxford', 'Dr. Laporte - Former research partner of her father']
  },
  {
    id: 'dr-amira',
    name: 'DR. AMIRA HASSAN',
    briefRole: 'Oxford scholar bridging traditions and truth',
    description: 'Third-generation Egyptian-British archaeologist whose quest for historical truth has led her into increasingly dangerous intellectual and spiritual territory.',
    fullDescription: [
      'Third-generation Egyptian-British archaeologist whose quest for historical truth has led her into increasingly dangerous intellectual and spiritual territory.',
      'As Sarah\'s unexpected ally at Oxford, she helps navigate institutional resistance while protecting her own controversial research on women\'s spiritual leadership in early Islam. Her support of Sarah forces her to confront whether maintaining silence about her own discoveries is protecting tradition or betraying truth.'
    ],
    image: amiraHassan,
    timeline: 'modern',
    relationships: ['Dr. Sarah Jones - Research ally', 'Oxford Faculty Board - Complex relationship']
  },
  {
    id: 'dr-laporte',
    name: 'DR. LAPORTE',
    briefRole: 'Mentor haunted by prophetic dreams',
    description: 'Former research partner of Sarah\'s father, now guided by mysterious dreams.',
    fullDescription: [
      'Former research partner of Sarah\'s father, now haunted by prophetic dreams following a tragic car accident that killed his family in Mexico.',
      'His role as Sarah\'s mentor becomes a path to healing his own spiritual wounds. Initially withdrawn from meaningful research, he finds renewed purpose in supporting Sarah\'s controversial discoveries.'
    ],
    image: drLaporte,
    timeline: 'modern',
    relationships: ['Sarah Jones - Mentee', 'Sarah\'s Father - Former colleague']
  },
  {
    id: 'jody-mathews',
    name: 'JODY MATHEWS',
    briefRole: 'Skeptical journalist confronting her own beliefs',
    description: 'Influential journalist whose investigation evolves into a personal journey.',
    fullDescription: [
      'Influential journalist and media personality whose investigation of Sarah\'s work begins as an exposé but evolves into a personal journey.',
      'A former Catholic turned committed atheist following religious trauma, Jody\'s skepticism masks deep spiritual wounds waiting to be healed.'
    ],
    image: jodyMathews,
    timeline: 'modern',
    relationships: ['Sarah Jones - Initial antagonist turned ally', 'Media Network - Complex professional relationships']
  }
];

// Historical Timeline Characters
const historicalCharacters: Character[] = [
  {
    id: 'mary-magdalene',
    name: 'MARY MAGDALENE',
    briefRole: 'From society\'s margins to spiritual leader',
    description: 'First-born child of a fishing family, whose journey from outcast to chief teacher embodies the series\' themes.',
    fullDescription: [
      'First-born child of a fishing family, forced by circumstances into Magdala\'s \'nefarious resorts.\' Despite society\'s judgment, she maintains an inner resilience that transforms into spiritual leadership after meeting Jesus.',
      'Her journey from outcast to chief teacher in the Women\'s Corps embodies the series\' themes of spiritual equality and transformation.'
    ],
    image: maryMagdalene,
    timeline: 'historical',
    relationships: ['Martha - Fellow Corps leader', 'Jesus - Spiritual teacher']
  },
  {
    id: 'martha',
    name: 'MARTHA',
    briefRole: 'Bridge between tradition and revolution',
    description: 'Elder sister of apostles Andrew and Peter, bridging traditional and revolutionary aspects of Jesus\'s movement.',
    fullDescription: [
      'Elder sister of apostles Andrew and Peter, Martha bridges the gap between the traditional and revolutionary aspects of Jesus\' movement.',
      'Her organizational skills and practical wisdom prove essential to the Women\'s Corps\' success, even as she navigates complex family dynamics.'
    ],
    image: martha,
    timeline: 'historical',
    relationships: ['Andrew and Peter - Brothers', 'Mary Magdalene - Fellow Corps member']
  },
  {
    id: 'rebecca',
    name: 'REBECCA',
    briefRole: 'Privileged daughter choosing truth over status',
    description: 'Daughter of Joseph of Arimathea, risking privilege for truth.',
    fullDescription: [
      'Daughter of Joseph of Arimathea, who risks her privileged position to support the women\'s movement.',
      'Her journey represents the cost of choosing spiritual truth over societal status. Together with Mary Magdalene, she becomes one of the most effective teachers in the Women\'s Corps.'
    ],
    image: rebecca,
    timeline: 'historical',
    relationships: ['Joseph of Arimathea - Father', 'Women\'s Corps - Fellow teachers']
  },
  {
    id: 'susanna',
    name: 'SUSANNA',
    briefRole: 'Scholar preserving revolutionary truth',
    description: 'Alexandrian scholar documenting Jesus\'s philosophical teachings.',
    fullDescription: [
      'Alexandrian scholar at the Great Library and Museum whose meticulous documentation of Jesus\'s philosophical teachings creates crucial evidence linking historical timelines.',
      'Her systematic recording of spiritual truths across traditions provides key validation for Sarah\'s research while setting up her own journey as Season 2\'s protagonist.'
    ],
    image: susanna,
    timeline: 'historical',
    relationships: ['Alexandria Library - Scholar community', 'Future generations - Through her preserved records']
  },
  {
    id: 'simon-peter',
    name: 'SIMON PETER',
    briefRole: 'From skeptic to supporter of women\'s ministry',
    description: 'His transformation illustrates how traditional attitudes can evolve.',
    fullDescription: [
      'His transformation from skeptic to supporter of women\'s ministry provides a crucial arc illustrating how traditional patriarchal attitudes can evolve through spiritual understanding.',
      'His initial resistance to and eventual acceptance of women\'s spiritual leadership mirrors modern institutional challenges to gender equality.'
    ],
    image: simonPeter,
    timeline: 'historical',
    relationships: ['Martha - Sister', 'Jesus - Teacher', 'Women\'s Corps - Initial skeptic turned advocate']
  },
  {
    id: 'jesus',
    name: 'JESUS',
    briefRole: 'Revolutionary teacher of spiritual equality',
    description: 'His recognition of women\'s divine nature challenges assumptions across time.',
    fullDescription: [
      'Though not the protagonist, his revolutionary proclamation of spiritual equality sets both timelines in motion.',
      'Portrayed as a radical spiritual teacher whose recognition of women\'s divine nature challenges both ancient and modern assumptions about gender and spirituality.'
    ],
    image: jesus,
    timeline: 'historical',
    relationships: ['Women\'s Corps - Teacher and supporter', 'Religious establishment - Revolutionary challenger']
  }
];

export const characters: Character[] = [...modernCharacters, ...historicalCharacters];