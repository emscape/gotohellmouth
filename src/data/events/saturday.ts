import type { ScheduleEvent } from '@/types';
import { csvEvent } from './builders';

export const saturdayCsvEvents: ScheduleEvent[] = [
  csvEvent('sat-opening-ceremonies', 'Opening Ceremonies', '2026-06-13T09:30:00-07:00', '2026-06-13T09:50:00-07:00', 'main-auditorium', 'panel'),
  {
    ...csvEvent('sat-welcome-to-the-hellmouth', 'Welcome to the Hellmouth (Julie Benz)', '2026-06-13T09:30:00-07:00', '2026-06-13T10:00:00-07:00', 'outside-photo-studio', 'photo-op'),
    description: `Kick your weekend off and sink your teeth into Buffy history alongside Julie Benz in the halls of Sunnydale High. This photo pays homage to the iconic moment when Darla set the tone for an entire genre-subverting world. Whether you're new in town or a vampire with centuries of convention experience, this fang-tastic photo opportunity will be killer.

Specialty Tableau Photo with Julie Benz.

$110 | Limited to 30`,
    heroImage: '/images/specialty-tableaux/welcome-to-the-hellmouth.jpg',
  },
  csvEvent('sat-amber-benson-audiobook', 'Genre Literature: A conversation with Amber Benson and Raven Belasco', '2026-06-13T10:00:00-07:00', '2026-06-13T10:45:00-07:00', 'main-auditorium', 'panel'),
  csvEvent('sat-soothsaying', 'Soothsaying and Fortune Telling: Learning How to foretell the future through scenario planning', '2026-06-13T10:00:00-07:00', '2026-06-13T10:45:00-07:00', 'panel-room-b', 'panel'),
  {
    ...csvEvent('sat-they-might-take-yours-doug', 'They Might Take Yours (Doug Jones)', '2026-06-13T10:00:00-07:00', '2026-06-13T10:30:00-07:00', 'photo-op-room', 'photo-op'),
    description: `Inspired by one of Buffy's most haunting episodes, this eerie tableau places you alongside the very gentlemanly Doug Jones. Featuring a preserved heart in a jar and an homage to the looming Sunnydale clocktower, this chilling photo will cut right to the heart.

Specialty Tableau Photo with Doug Jones.

$95 | Limited to 30 each day`,
    heroImage: '/images/specialty-tableaux/they-might-take-yours.jpg',
  },
  csvEvent('sat-james-autograph-morning', 'James Leary', '2026-06-13T10:00:00-07:00', '2026-06-13T11:00:00-07:00', 'autograph-alley', 'autograph'),
  csvEvent('sat-larry-autograph-morning', 'Larry Bagby', '2026-06-13T10:00:00-07:00', '2026-06-13T11:00:00-07:00', 'autograph-alley', 'autograph'),
  csvEvent('sat-clare-autograph-morning', 'Clare Kramer', '2026-06-13T10:00:00-07:00', '2026-06-13T11:30:00-07:00', 'autograph-alley', 'autograph'),
  csvEvent('sat-emma-autograph-morning', 'Emma Caulfield', '2026-06-13T10:00:00-07:00', '2026-06-13T11:30:00-07:00', 'autograph-alley', 'autograph'),
  {
    ...csvEvent('sat-im-in-starch-heaven', "I'm in Starch Heaven: Angel Cast Breakfast", '2026-06-13T10:00:00-07:00', '2026-06-13T11:00:00-07:00', 'panel-room-a', 'fan-experience'),
    description: `Help the Helpless to another helping alongside Angel's friends and foes during I'M IN STARCH HEAVEN, a Saturday morning catered breakfast featuring the denizens of the Buffyverse's Los Angeles, who will rotate from table to table in the tradition of our traditional Villains Breakfast.

Fan Experience Breakfast with Amy Acker, Charisma Carpenter, Julie Benz, Mark Lutz, J August Richards, and Stephanie Romanov.`,
    heroImage: '/images/fan-experiences/starch-heaven.avif',
  },
  csvEvent('sat-raven-autograph-morning', 'Raven Belasco', '2026-06-13T11:00:00-07:00', '2026-06-13T12:00:00-07:00', 'autograph-alley', 'autograph'),
  csvEvent('sat-camden', 'Why We Fight: Camden Toy, PanCAN, and How HellmouthCon Chooses its Charities', '2026-06-13T11:00:00-07:00', '2026-06-13T11:45:00-07:00', 'main-auditorium', 'panel'),
  csvEvent('sat-demonhuntr', 'DEMONHUNTR: When Buffy/Angel Nerds Make an Original Series', '2026-06-13T11:00:00-07:00', '2026-06-13T11:45:00-07:00', 'panel-room-b', 'panel'),
  csvEvent('sat-gay-watchers-council', "The Gay Watcher's Council", '2026-06-13T11:00:00-07:00', '2026-06-13T12:00:00-07:00', 'secondary-courtyard', 'immersive-entertainment'),
  {
    ...csvEvent('sat-moving-in', 'We\'re Moving In (Amy Acker, Charisma Carpenter, J. August Richards, Julie Benz, Mark Lutz, Stephanie Romanov)', '2026-06-13T11:00:00-07:00', '2026-06-13T11:30:00-07:00', 'panel-room-a', 'photo-op'),
    description: `68 Rooms, 68 Vacancies. The Hyperion Hotel wasn't just headquarters—it was home. Join Amy Acker, Charisma Carpenter, J. August Richards, Julie Benz, Mark Lutz, and Stephanie Romanov in this unique HellmouthCon tribute to the place where Angel Investigations became a family.

Specialty Tableau Cast Photo with Amy Acker, Charisma Carpenter, J August Richards, Julie Benz, Mark Lutz, and Stephanie Romanov.

$430 | Limited to 15`,
    heroImage: '/images/specialty-tableaux/were-moving-in.jpg',
  },
  {
    ...csvEvent('sat-lesbian-gay-type-lovers', 'Lesbian Gay-Type Lovers (Amber Benson, Iyari Limon)', '2026-06-13T11:00:00-07:00', '2026-06-13T11:30:00-07:00', 'photo-op-room', 'photo-op'),
    description: `Stand between two of Willow's great loves in this Combo Photo in the Photo Studio with Amber Benson and Iyari Limon.

Specialty Tableau Photo with Amber Benson and Iyari Limon.

$130 | Limited to 30`,
    heroImage: '/images/specialty-tableaux/lesbian-gay-type-lovers.jpg',
  },
  csvEvent('sat-sunnydale-elem', 'Sunnydale Elementary Storytime & Sing-Along', '2026-06-13T12:00:00-07:00', '2026-06-13T13:00:00-07:00', 'outdoor-stage', 'immersive-entertainment'),
  { ...csvEvent('sat-amber-photo', 'Amber Benson', '2026-06-13T11:30:00-07:00', '2026-06-13T12:00:00-07:00', 'photo-op-room', 'photo-op'), heroImage: '/images/photo-ops/amber-benson.jpg' },
  csvEvent('sat-multi-beings', '(Multi) Dimensional Beings', '2026-06-13T12:00:00-07:00', '2026-06-13T12:45:00-07:00', 'main-auditorium', 'panel'),
  csvEvent('sat-hey-im-enjoying-the', `"Hey, I'm enjoying the studying": Academia, Fandom, and the Acafan`, '2026-06-13T12:00:00-07:00', '2026-06-13T12:45:00-07:00', 'panel-room-b', 'panel'),
  csvEvent('sat-wolfram-hart-talent-acquisition', 'Wolfram & Hart: Talent Acquisition', '2026-06-13T12:00:00-07:00', '2026-06-13T13:00:00-07:00', 'secondary-courtyard', 'workshop'),
  { ...csvEvent('sat-j-august', 'J August Richards', '2026-06-13T12:00:00-07:00', '2026-06-13T12:30:00-07:00', 'photo-op-room', 'photo-op'), heroImage: '/images/photo-ops/j-august-richards.jpg' },
  csvEvent('sat-amber-autograph-midday', 'Amber Benson', '2026-06-13T12:00:00-07:00', '2026-06-13T13:00:00-07:00', 'autograph-alley', 'autograph'),
  csvEvent('sat-doug-autograph-midday', 'Doug Jones', '2026-06-13T12:00:00-07:00', '2026-06-13T13:00:00-07:00', 'autograph-alley', 'autograph'),
  {
    ...csvEvent('sat-ruler-throne', 'They Made Me Ruler (Charisma Carpenter, Mark Lutz)', '2026-06-13T12:30:00-07:00', '2026-06-13T13:00:00-07:00', 'panel-room-a', 'photo-op'),
    description: `Step into the palace of Pylea to take your place beside Princess Cordelia and the Groosalugg beside the actual throne used during the filming of Angel's Pylea arc. This is no replica—it's the exact throne seen on screen. This is a once-in-a-lifetime chance to claim the seat of power in the company of two of Pylea's rulers while recreating Angel Investigations' most unforgettable adventure.

Specialty Tableau Photo with Charisma Carpenter and Mark Lutz.`,
    heroImage: '/images/specialty-tableaux/they-made-me-ruler.jpg',
  },
  { ...csvEvent('sat-james', 'James Leary', '2026-06-13T12:30:00-07:00', '2026-06-13T13:00:00-07:00', 'photo-op-room', 'photo-op'), heroImage: '/images/photo-ops/james-leary.jpg' },
  { ...csvEvent('sat-emma-photo', 'Emma Caulfield', '2026-06-13T13:00:00-07:00', '2026-06-13T13:30:00-07:00', 'photo-op-room', 'photo-op'), heroImage: '/images/photo-ops/emma-caulfield.jpg' },
  csvEvent('sat-casting-call', 'Casting Call', '2026-06-13T13:00:00-07:00', '2026-06-13T13:45:00-07:00', 'main-auditorium', 'panel'),
  csvEvent('sat-bring-back-firefy', 'Bring Back Firefly!', '2026-06-13T13:00:00-07:00', '2026-06-13T13:45:00-07:00', 'panel-room-b', 'panel'),
  {
    ...csvEvent('sat-vowel-play', 'Vowel Play: A Vision Quest', '2026-06-13T13:00:00-07:00', '2026-06-13T14:00:00-07:00', 'panel-room-a', 'fan-experience'),
    description: `The suave but scheming Lilah Morgan has blocked Cordelia's visions and rerouted them to invade the minds of two otherworldly beings, Glorificus and Darla. They just keep seeing and hearing Buffy and Angel quotes on repeat! Glory's Minions will face off against Darla's Muscle to be the first to restore their leader's comfort and sanity by solving the puzzle to complete the quotes. But watch out, Lilah may step out of the Vanna White Room to reveal a few tricks up her sleeve to stop you. Which team will decipher the most visions in Vowel Play: A Vision Quest, a "Wheel of Fortune"-style Fan Experience?

Fan Experience Party Game with Clare Kramer, Julie Benz, and Stephanie Romanov.`,
    heroImage: '/images/fan-experiences/vowel-play.avif',
  },
  { ...csvEvent('sat-amy', 'Amy Acker', '2026-06-13T13:30:00-07:00', '2026-06-13T14:00:00-07:00', 'photo-op-room', 'photo-op'), heroImage: '/images/photo-ops/amy-acker.jpg' },
  csvEvent('sat-j-august-autograph-afternoon', 'J. August Richards', '2026-06-13T13:30:00-07:00', '2026-06-13T14:30:00-07:00', 'autograph-alley', 'autograph'),
  csvEvent('sat-beauty-and-the-beasts', 'Beauty and the Beasts', '2026-06-13T14:00:00-07:00', '2026-06-13T14:45:00-07:00', 'main-auditorium', 'panel'),
  csvEvent('sat-panel-by-panel', 'Panel by Panel: Navigating Buffy in the Comics Medium', '2026-06-13T14:00:00-07:00', '2026-06-13T14:45:00-07:00', 'panel-room-b', 'panel'),
  {
    ...csvEvent('sat-lets-get-crazy-clare', 'Let\'s Get Crazy (Clare Kramer)', '2026-06-13T14:00:00-07:00', '2026-06-13T14:30:00-07:00', 'panel-room-a', 'photo-op'),
    description: `A completely original Brain Suck-themed photo experience designed just for HellmouthCon. This custom setup has never been offered at any convention, anywhere.

Specialty Tableau Photo with Clare Kramer.

$85 | Limited to 30 each day`,
    heroImage: '/images/specialty-tableaux/lets-get-crazy.jpg',
  },
  { ...csvEvent('sat-charisma-photo', 'Charisma Carpenter', '2026-06-13T14:00:00-07:00', '2026-06-13T14:30:00-07:00', 'photo-op-room', 'photo-op'), heroImage: '/images/photo-ops/charisma-carpenter.jpg' },
  {
    ...csvEvent('sat-is-this-seat-taken', 'Is This Seat Taken? (Clare Kramer, Amber Benson)', '2026-06-13T14:30:00-07:00', '2026-06-13T15:00:00-07:00', 'panel-room-a', 'photo-op'),
    description: `A one-of-a-kind pairing of Tara and Glory, brought together for the first time ever. Created exclusively for HellmouthCon and never offered at any other event.

Specialty Tableau Photo with Clare Kramer and Amber Benson.`,
    heroImage: '/images/specialty-tableaux/is-this-seat-taken.jpg',
  },
  csvEvent('sat-amy-autograph-afternoon', 'Amy Acker', '2026-06-13T14:30:00-07:00', '2026-06-13T15:30:00-07:00', 'autograph-alley', 'autograph'),
  csvEvent('sat-julie-autograph-afternoon', 'Julie Benz', '2026-06-13T14:30:00-07:00', '2026-06-13T15:30:00-07:00', 'autograph-alley', 'autograph'),
  csvEvent('sat-larry-autograph-afternoon', 'Larry Bagby', '2026-06-13T14:30:00-07:00', '2026-06-13T15:30:00-07:00', 'autograph-alley', 'autograph'),
  csvEvent('sat-iyari-autograph-afternoon', 'Iyari Limon', '2026-06-13T14:30:00-07:00', '2026-06-13T15:30:00-07:00', 'autograph-alley', 'autograph'),
  csvEvent('sat-clare-chats-w-friends', 'Friends of the Buffyverse!', '2026-06-13T15:15:00-07:00', '2026-06-13T16:00:00-07:00', 'main-auditorium', 'panel'),
  {
    ...csvEvent('sat-poetry-for-demons', 'Poetry for Demons', '2026-06-13T15:00:00-07:00', '2026-06-13T16:00:00-07:00', 'panel-room-a', 'fan-experience'),
    description: `After Sunnydale collapsed, Clem and Groo got a job team-teaching English to demons… obviously. You're a demon enrolled in their class, and today's topic: Episode Titles! Your instructors know better than anyone that the world likes its demons monosyllabic, so no two syllable words are allowed! And if he hears one, your teacher just might express some disappointment through the universal language of punishment. This "Poetry for Neanderthals"-inspired Fan Experience will be a class act.

Fan Experience Party Game with James C Leary and Mark Lutz.`,
    heroImage: '/images/fan-experiences/poetry-for-demons.avif',
  },
  csvEvent('sat-wicca-club', 'Wicca Club', '2026-06-13T15:00:00-07:00', '2026-06-13T16:45:00-07:00', 'secondary-courtyard', 'immersive-entertainment'),
  { ...csvEvent('sat-larry-photo', 'Larry Bagby', '2026-06-13T15:30:00-07:00', '2026-06-13T16:00:00-07:00', 'photo-op-room', 'photo-op'), heroImage: '/images/photo-ops/larry-bagby.jpg' },
  csvEvent('sat-doug-autograph-afternoon', 'Doug Jones', '2026-06-13T15:00:00-07:00', '2026-06-13T16:00:00-07:00', 'autograph-alley', 'autograph'),
  csvEvent('sat-stephanie-autograph-late', 'Stephanie Romanov', '2026-06-13T15:30:00-07:00', '2026-06-13T17:00:00-07:00', 'autograph-alley', 'autograph'),
  csvEvent('sat-neurodivergence-in-buffyverse', '"What Is Your Childhood Trauma?" Neurodivergence, Neurodiversity, and Neurodisability in the Buffyverse', '2026-06-13T16:00:00-07:00', '2026-06-13T16:45:00-07:00', 'panel-room-b', 'panel'),
  csvEvent('sat-amber-autograph-late', 'Amber Benson', '2026-06-13T16:00:00-07:00', '2026-06-13T17:00:00-07:00', 'autograph-alley', 'autograph'),
  csvEvent('sat-charisma-autograph-late', 'Charisma Carpenter', '2026-06-13T16:00:00-07:00', '2026-06-13T17:00:00-07:00', 'autograph-alley', 'autograph'),
  csvEvent('sat-mark-autograph-late', 'Mark Lutz', '2026-06-13T16:00:00-07:00', '2026-06-13T17:00:00-07:00', 'autograph-alley', 'autograph'),
  csvEvent('sat-james-autograph-late', 'James Leary', '2026-06-13T16:00:00-07:00', '2026-06-13T17:00:00-07:00', 'autograph-alley', 'autograph'),
  csvEvent('sat-raven-autograph-late', 'Raven Belasco', '2026-06-13T16:00:00-07:00', '2026-06-13T17:00:00-07:00', 'autograph-alley', 'autograph'),
  csvEvent('sat-watchers-academy', 'Watchers Academy: A Chronicle of the Slayer Lineage', '2026-06-13T16:00:00-07:00', '2026-06-13T17:00:00-07:00', 'secondary-courtyard', 'immersive-entertainment'),
  {
    ...csvEvent('sat-letters-from-los-angeles', 'Letters from Los Angeles: Demonic Spelling Bee', '2026-06-13T16:30:00-07:00', '2026-06-13T17:30:00-07:00', 'panel-room-a', 'fan-experience'),
    description: `Thesulac. Kleynach. Krevlorsnwath. Skip.

Consult your Nyazian Scrolls, something BIG is coming and you're going to have to tackle it one letter at a time! Team Fred faces off against Team Gunn to save the world in the Demon Spelling Bee to end all spelling bees. The power was inside you the whole time. Also the vowels. Study up on your demon names, prophecy authors, and magical words (Thaumogenesis, anyone?) to prepare for this other-word-ly "Scrabble"-inspired Fan Experience.

Fan Experience Party Game with Amy Acker and J August Richards.`,
    heroImage: '/images/fan-experiences/letters-from-los-angeles.avif',
  },
  csvEvent('sat-once-more-with-feeling-parody', 'Once More with Feeling a Live Musical Parody', '2026-06-13T17:00:00-07:00', '2026-06-13T18:00:00-07:00', 'main-auditorium', 'panel'),
  csvEvent('sat-sunnydale-high-gsa', 'Sunnydale High GSA Mixer', '2026-06-13T17:00:00-07:00', '2026-06-13T18:00:00-07:00', 'secondary-courtyard', 'mixer'),
  csvEvent('sat-draculas-covenant', "Dracula's Covenant: The Taste of Eternity", '2026-06-13T18:00:00-07:00', '2026-06-13T19:00:00-07:00', 'secondary-courtyard', 'immersive-entertainment'),
  csvEvent('sat-idiots-lantern', `The Idiot's Lantern- Sketch Comedy that Slays`, '2026-06-13T19:00:00-07:00', '2026-06-13T20:00:00-07:00', 'panel-room-b', 'panel'),
  csvEvent('sat-get-down-with-your-bad-self', 'Get Down with Your Bad Self', '2026-06-13T19:30:00-07:00', '2026-06-13T21:30:00-07:00', 'outdoor-stage', 'mixer'),
  csvEvent('sat-songs-from-the-playbook', 'Songs from the Playbook', '2026-06-13T20:00:00-07:00', '2026-06-13T20:30:00-07:00', 'outdoor-stage', 'immersive-entertainment'),
];