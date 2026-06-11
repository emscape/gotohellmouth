import type { ScheduleEvent } from '@/types';
import { sundayCsvEvent } from './builders';

export const sundayCsvEvents: ScheduleEvent[] = [
  {
    ...sundayCsvEvent('sun-yes-please-diner', 'Yes Please (Amy Acker, J. August Richards)', '2026-06-14T09:30:00-07:00', '2026-06-14T10:00:00-07:00', 'photo-op-room', 'photo-op'),
    description: `Fred and Gunn's romance remains one of Angel's sweetest stories — complete with whipped cream! Pose like you're sharing breakfast at a diner booth with Amy Acker and J. August Richards in a scene inspired by the quiet moments that fans can never have too many of (like Fred with pancakes).

Specialty Tableau Photo with Amy Acker and J August Richards.`,
    heroImage: '/images/specialty-tableaux/yes-please.jpg',
  },
  sundayCsvEvent('sun-doug-jones', 'Q&A with Doug Jones', '2026-06-14T10:00:00-07:00', '2026-06-14T10:45:00-07:00', 'main-auditorium', 'panel'),
  sundayCsvEvent('sun-cosplay-and-sfx-beginners', 'Cosplay and SFX for Beginners', '2026-06-14T10:00:00-07:00', '2026-06-14T10:45:00-07:00', 'panel-room-b', 'workshop'),
  {
    ...sundayCsvEvent('sun-you-need-this-more-than-i-do', 'You Need This More Than I Do (Charisma Carpenter, Emma Caulfield)', '2026-06-14T10:00:00-07:00', '2026-06-14T10:30:00-07:00', 'school-courtyard', 'photo-op'),
    description: `What would you do if you found yourself between Cordelia and Anya in the Sunnydale courtyard and they offer you the famous vengeance amulet? Featuring a replica of Anyanka's amulet and two fan-favorite stars, this photo will be out of this world!

Specialty Tableau Photo with Charisma Carpenter and Emma Caulfield.

$185 | Limited to 30`,
    heroImage: '/images/specialty-tableaux/you-need-this-more-than-i-do.jpg',
  },
  {
    ...sundayCsvEvent('sun-some-of-the-kids-at-my-camp', 'Some of the Kids at my Camp Put it Together For Me (J. August Richards)', '2026-06-14T10:00:00-07:00', '2026-06-14T10:30:00-07:00', 'photo-op-room', 'photo-op'),
    description: `Get your hands on the actual hubcap axe used on camera by Gunn in Angel, the homemade weapon he carried through the demon-infested streets of Los Angeles. Stand against the forces of evil alongside J. August Richards with one of the most recognizable weapons in the Buffyverse — generously supplied by the legend himself.

Specialty Tableau Photo with J August Richards.

$85 | Limited to 30`,
    heroImage: '/images/specialty-tableaux/some-of-the-kids-at-camp-put-it-together-for-me.jpg',
  },
  {
    ...sundayCsvEvent('sun-hang-with-me-and-mine', 'Hang with Me and Mine (Amber Benson, Charisma Carpenter, Clare Kramer, Emma Caulfield, Iyari Limon, James C Leary, Larry Bagby)', '2026-06-14T10:30:00-07:00', '2026-06-14T11:00:00-07:00', 'school-courtyard', 'photo-op'),
    description: `Take your place in the iconic Sunnydale High courtyard alongside Amber Benson, Charisma Carpenter, Clare Kramer, Emma Caulfield, Iyari Limon, James C Leary, and Larry Bagby for a cast photo inspired by one of Cordelia's most memorable invitations. Share the frame with an incredible lineup of Buffy faves in a photo that can only happen at HellmouthCon.

Specialty Tableau Cast Photo with Amber Benson, Charisma Carpenter, Clare Kramer, Emma Caulfield, Iyari Limon, James C Leary, and Larry Bagby.

$480 | Limited to 15`,
    heroImage: '/images/specialty-tableaux/hang-with-me-and-mine.jpg',
  },
  { ...sundayCsvEvent('sun-amy-acker', 'Amy Acker', '2026-06-14T10:30:00-07:00', '2026-06-14T11:00:00-07:00', 'photo-op-room', 'photo-op'), heroImage: '/images/photo-ops/amy-acker.jpg' },
  sundayCsvEvent('sun-stephanie-autograph-morning', 'Stephanie Romanov', '2026-06-14T10:00:00-07:00', '2026-06-14T11:00:00-07:00', 'autograph-alley', 'autograph'),
  sundayCsvEvent('sun-mark-autograph-morning', 'Mark Lutz', '2026-06-14T10:00:00-07:00', '2026-06-14T11:00:00-07:00', 'autograph-alley', 'autograph'),
  sundayCsvEvent('sun-hold-you-so-tight', 'Love and Robots', '2026-06-14T11:00:00-07:00', '2026-06-14T11:45:00-07:00', 'main-auditorium', 'panel'),
  sundayCsvEvent('sun-watchers-academy', 'Watchers Academy: Demons of the Hellmouth', '2026-06-14T11:00:00-07:00', '2026-06-14T11:45:00-07:00', 'panel-room-b', 'panel'),
  sundayCsvEvent('sun-breaking-boundaries', 'Breaking Boundaries - Celebrating BIPOC Legacies at Sunnydale High', '2026-06-14T11:00:00-07:00', '2026-06-14T12:00:00-07:00', 'secondary-courtyard', 'immersive-entertainment'),
  { ...sundayCsvEvent('sun-julie-benz', 'Julie Benz', '2026-06-14T11:00:00-07:00', '2026-06-14T11:30:00-07:00', 'photo-op-room', 'photo-op'), heroImage: '/images/photo-ops/julie-benz.jpg' },
  sundayCsvEvent('sun-j-august-autograph-midday', 'J. August Richards', '2026-06-14T11:00:00-07:00', '2026-06-14T12:30:00-07:00', 'autograph-alley', 'autograph'),
  { ...sundayCsvEvent('sun-stephanie-photo', 'Stephanie Romanov', '2026-06-14T11:30:00-07:00', '2026-06-14T12:00:00-07:00', 'photo-op-room', 'photo-op'), heroImage: '/images/photo-ops/stephanie-romanov.jpg' },
  sundayCsvEvent('sun-turning-your-passion', 'Turning Your Passion into a Paying Gig', '2026-06-14T12:00:00-07:00', '2026-06-14T12:45:00-07:00', 'main-auditorium', 'panel'),
  sundayCsvEvent('sun-slaying-real-life', 'Slaying Real-Life Demons: Mental Health with Buffy & Beyond - a Live Podcast Recording', '2026-06-14T12:00:00-07:00', '2026-06-14T12:45:00-07:00', 'panel-room-b', 'panel'),
  {
    ...sundayCsvEvent('sun-muffin-i-cooked-them-myself-cast-brunch', 'Muffin? I Cooked Them Myself!: Buffy Cast Brunch', '2026-06-14T11:00:00-07:00', '2026-06-14T12:30:00-07:00', 'panel-room-a', 'fan-experience'),
    description: `Join 7 of our Sunnydale alum from Buffy the Vampire Slayer for MUFFIN? I COOKED THEM MYSELF!, a fang-tastic and unforgettable themed catered brunch on Sunday morning. Our heroes and villains will rotate from table to table in the tradition of our popular Villains Breakfast.

Fan Experience Brunch with Amber Benson, Clare Kramer, Doug Jones, Emma Caulfield, James C Leary, Larry Bagby, and Iyari Limon.`,
    heroImage: '/images/fan-experiences/muffin.avif',
  },
  sundayCsvEvent('sun-corp-dance-courtyard', 'The Corps Dance Crew Live', '2026-06-14T13:30:00-07:00', '2026-06-14T14:00:00-07:00', 'school-courtyard', 'immersive-entertainment'),
  {
    ...sundayCsvEvent('sun-corp-dance-entrance', 'The Corps Dance Crew Live', '2026-06-14T14:30:00-07:00', '2026-06-14T15:00:00-07:00', 'registration', 'immersive-entertainment'),
    displayLocationLabel: 'The Entrance',
  },
  { ...sundayCsvEvent('sun-mark-photo', 'Mark Lutz', '2026-06-14T12:00:00-07:00', '2026-06-14T12:30:00-07:00', 'photo-op-room', 'photo-op'), heroImage: '/images/photo-ops/mark-lutz.jpg' },
  { ...sundayCsvEvent('sun-larry-photo', 'Larry Bagby', '2026-06-14T12:30:00-07:00', '2026-06-14T13:00:00-07:00', 'photo-op-room', 'photo-op'), heroImage: '/images/photo-ops/larry-bagby.jpg' },
  sundayCsvEvent('sun-julie-autograph-midday', 'Julie Benz', '2026-06-14T12:00:00-07:00', '2026-06-14T13:00:00-07:00', 'autograph-alley', 'autograph'),
  sundayCsvEvent('sun-d-hoffrans-fold', "D'Hoffran's Fold: Curses, Chaos, and Career Vengeance", '2026-06-14T12:00:00-07:00', '2026-06-14T13:00:00-07:00', 'secondary-courtyard', 'workshop'),
  {
    ...sundayCsvEvent('sun-you-rock-clem', 'You Rock! (James C Leary)', '2026-06-14T12:30:00-07:00', '2026-06-14T13:00:00-07:00', 'panel-room-a', 'photo-op'),
    description: `Hop into a red VW Bug with Clem himself and pose like you're going for a joyride with one of the most lovable dudes in Sunnydale. Complete with Clem makeup and a sendup to his iconic Beetle, this playful photo is pure fan-service in the best possible way.

Specialty Tableau Photo with James C Leary.

$85 | Limited to 30`,
    heroImage: '/images/specialty-tableaux/you-rock.jpg',
  },
  sundayCsvEvent('sun-amy-autograph', 'Amy Acker', '2026-06-14T12:00:00-07:00', '2026-06-14T13:00:00-07:00', 'autograph-alley', 'autograph'),
  sundayCsvEvent('sun-rabbits-skin-conditions', `Rabbits, Skin Conditions and School Spirit: Sunnydale's Most Unexpected MVP's`, '2026-06-14T13:00:00-07:00', '2026-06-14T13:45:00-07:00', 'main-auditorium', 'panel'),
  sundayCsvEvent('sun-what-would-buffy-do', 'What Would Buffy Do? Why We Need Buffy the Vampire Slayer More Than Ever', '2026-06-14T13:00:00-07:00', '2026-06-14T13:45:00-07:00', 'panel-room-b', 'panel'),
  {
    ...sundayCsvEvent('sun-cant-even', "Can't Even Shout: A Pictionary Game of Sunnydale Locations", '2026-06-14T13:00:00-07:00', '2026-06-14T14:00:00-07:00', 'panel-room-a', 'fan-experience'),
    description: `The citizens of Sunnydale are fleeing The Gentlemen, but they don't have their voices! Each player will get a chance to sketch the Sunnydale location they are fleeing to (as randomly drawn) while their teammates write their best guesses on the white boards hanging around their necks. Those who get it right take one step closer to Tara and to safety. Those who don't are forced to stand still until the next round… as The Lead Gentleman advances. Who will make it all the way to safety, and whose heart will end up in a jar? This "Pictionary"-meets-"Red-Rover"-style Fan Experience will be a SCREAM.

Fan Experience Party Game with Amber Benson and Doug Jones.`,
    heroImage: '/images/fan-experiences/cant-even-shout.avif',
  },
  { ...sundayCsvEvent('sun-charisma-photo', 'Charisma Carpenter', '2026-06-14T13:00:00-07:00', '2026-06-14T13:30:00-07:00', 'photo-op-room', 'photo-op'), heroImage: '/images/photo-ops/charisma-carpenter.jpg' },
  sundayCsvEvent('sun-clare-autograph', 'Clare Kramer', '2026-06-14T13:00:00-07:00', '2026-06-14T14:00:00-07:00', 'autograph-alley', 'autograph'),
  { ...sundayCsvEvent('sun-iyari-photo', 'Iyari Limon', '2026-06-14T13:30:00-07:00', '2026-06-14T14:00:00-07:00', 'photo-op-room', 'photo-op'), heroImage: '/images/photo-ops/iyari-limon.jpg' },
  sundayCsvEvent('sun-raven-autograph-afternoon', 'Raven Belasco', '2026-06-14T13:00:00-07:00', '2026-06-14T14:00:00-07:00', 'autograph-alley', 'autograph'),
  sundayCsvEvent('sun-sapphic-stories', `Under Their Spell: Sunnydale's Sapphic Stories`, '2026-06-14T14:00:00-07:00', '2026-06-14T15:00:00-07:00', 'secondary-courtyard', 'immersive-entertainment'),
  sundayCsvEvent('sun-that-old-gang', 'That Old Gang of Mine', '2026-06-14T14:00:00-07:00', '2026-06-14T14:45:00-07:00', 'main-auditorium', 'panel'),
  sundayCsvEvent('sun-emma-autograph-afternoon', 'Emma Caulfield', '2026-06-14T14:00:00-07:00', '2026-06-14T14:45:00-07:00', 'autograph-alley', 'autograph'),
  sundayCsvEvent('sun-iyari-autograph-afternoon', 'Iyari Limon', '2026-06-14T14:00:00-07:00', '2026-06-14T15:00:00-07:00', 'autograph-alley', 'autograph'),
  {
    ...sundayCsvEvent('sun-bunny-wrksp', 'They Might Take Yours (Doug Jones)', '2026-06-14T14:30:00-07:00', '2026-06-14T15:00:00-07:00', 'photo-op-room', 'photo-op'),
    description: `Inspired by one of Buffy's most haunting episodes, this eerie tableau places you alongside the very gentlemanly Doug Jones. Featuring a preserved heart in a jar and an homage to the looming Sunnydale clocktower, this chilling photo will cut right to the heart.

Specialty Tableau Photo with Doug Jones.

$95 | Limited to 30 each day`,
    heroImage: '/images/specialty-tableaux/they-might-take-yours.jpg',
  },
  {
    ...sundayCsvEvent('sun-lets-get-crazy-clare', 'Let\'s Get Crazy (Clare Kramer)', '2026-06-14T14:30:00-07:00', '2026-06-14T15:00:00-07:00', 'panel-room-a', 'photo-op'),
    description: `A completely original Brain Suck-themed photo experience designed just for HellmouthCon. This custom setup has never been offered at any convention, anywhere.

Specialty Tableau Photo with Clare Kramer.

$85 | Limited to 30 each day`,
    heroImage: '/images/specialty-tableaux/lets-get-crazy.jpg',
  },
  sundayCsvEvent('sun-nerd-best', 'Watch the Watcher: A Live Crossover Event with Nerd Best Friends and Whitney Hathcock', '2026-06-14T15:00:00-07:00', '2026-06-14T15:45:00-07:00', 'panel-room-b', 'panel'),
  {
    ...sundayCsvEvent('sun-is-this-seat-taken', 'Is This Seat Taken? (Clare Kramer, Amber Benson)', '2026-06-14T15:00:00-07:00', '2026-06-14T15:30:00-07:00', 'panel-room-a', 'photo-op'),
    description: `A one-of-a-kind pairing of Tara and Glory, brought together for the first time ever. Created exclusively for HellmouthCon and never offered at any other event.

Specialty Tableau Photo with Clare Kramer and Amber Benson.`,
    heroImage: '/images/specialty-tableaux/is-this-seat-taken.jpg',
  },
  { ...sundayCsvEvent('sun-stephanie-photo-late', 'Stephanie Romanov', '2026-06-14T15:00:00-07:00', '2026-06-14T15:30:00-07:00', 'photo-op-room', 'photo-op'), heroImage: '/images/photo-ops/stephanie-romanov.jpg' },
  sundayCsvEvent('sun-amy-autograph-late', 'Amy Acker', '2026-06-14T15:00:00-07:00', '2026-06-14T16:00:00-07:00', 'autograph-alley', 'autograph'),
  sundayCsvEvent('sun-the-bronze-sophie-cooper', 'The Bronze: Sophie Cooper', '2026-06-14T15:00:00-07:00', '2026-06-14T16:00:00-07:00', 'outdoor-stage', 'immersive-entertainment'),
  sundayCsvEvent('sun-doug-autograph-late', 'Doug Jones', '2026-06-14T15:00:00-07:00', '2026-06-14T16:00:00-07:00', 'autograph-alley', 'autograph'),
  sundayCsvEvent('sun-stephanie-autograph-late', 'Stephanie Romanov', '2026-06-14T15:00:00-07:00', '2026-06-14T16:00:00-07:00', 'autograph-alley', 'autograph'),
  sundayCsvEvent('sun-james-autograph-late', 'James Leary', '2026-06-14T15:00:00-07:00', '2026-06-14T16:00:00-07:00', 'autograph-alley', 'autograph'),
  sundayCsvEvent('sun-julie-autograph-late', 'Julie Benz', '2026-06-14T15:00:00-07:00', '2026-06-14T16:30:00-07:00', 'autograph-alley', 'autograph'),
  sundayCsvEvent('sun-larry-autograph-late', 'Larry Bagby', '2026-06-14T15:00:00-07:00', '2026-06-14T16:30:00-07:00', 'autograph-alley', 'autograph'),
  sundayCsvEvent('sun-youre-just-a', `You're Just a Girl`, '2026-06-14T15:45:00-07:00', '2026-06-14T16:25:00-07:00', 'main-auditorium', 'panel'),
  {
    ...sundayCsvEvent('sun-hall-pass-to-the-hellmouth-walking-tour', 'Hall Pass to the Hellmouth: Walking Tour', '2026-06-14T15:00:00-07:00', '2026-06-14T16:00:00-07:00', 'outdoor-stage', 'fan-experience'),
    description: `Wish Granted!

Back by popular demand, this time with a new twist! Cordy and Anya are getting together to guide you through their favorite high school memories in this walking tour of Sunnydale High filming locations with dynamic duo Charisma Carpenter and Emma Caulfield. Steep yourself in Buffy history as you follow along and listen to stories from their shooting days.

Fan Experience Walking Tour with Charisma Carpenter and Emma Caulfield.`,
    heroImage: '/images/fan-experiences/hall-pass-to-the-hellmouth.avif',
  },
  sundayCsvEvent('sun-amber-autograph-late', 'Amber Benson', '2026-06-14T15:30:00-07:00', '2026-06-14T16:30:00-07:00', 'autograph-alley', 'autograph'),
  sundayCsvEvent('sun-j-august-autograph-late', 'J. August Richards', '2026-06-14T15:30:00-07:00', '2026-06-14T16:30:00-07:00', 'autograph-alley', 'autograph'),
  sundayCsvEvent('sun-mark-autograph-late', 'Mark Lutz', '2026-06-14T15:30:00-07:00', '2026-06-14T16:30:00-07:00', 'autograph-alley', 'autograph'),
  sundayCsvEvent('sun-charisma-autograph-closing', 'Charisma Carpenter', '2026-06-14T16:00:00-07:00', '2026-06-14T17:00:00-07:00', 'autograph-alley', 'autograph'),
  sundayCsvEvent('sun-closing-ceremonies', 'Closing Ceremonies', '2026-06-14T16:30:00-07:00', '2026-06-14T17:00:00-07:00', 'main-auditorium', 'panel'),
];