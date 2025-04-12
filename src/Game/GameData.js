const gameData = {
    title: 'Oblivion Protocol',
	introduction: 'The world trembles before you, the architect of its impending doom. For too long, humanity has festered, a blight upon the natural order. Now, as the formidable villain, you will unleash your ultimate plan to cleanse this world, and no hero, not even the vaunted Marvel champions, will stand in your way. This is your turn-based saga of destruction. Choose wisely, for the fate of all realities hangs in the balance.',
	mainCharacterDeathScene: 'With a final, ragged breath, you survey the chaos wrought by your hand. The world burns, a testament to your ambition. But a searing pain pierces through you – a final, desperate strike from a fallen foe. As darkness encroaches, a grim satisfaction washes over you. They may have stopped you, but the world will never be the same. Your legacy is etched in fire and ruin.',
    chapters:[
        {
            text: "Born into a world choked by its own progress, you witnessed firsthand the relentless expansion of humanity, consuming the wild and silencing the ancient. The so-called heroes lauded this growth, blind to the festering wound it inflicted upon the planet. A seed of resentment grew, blossoming into a conviction: only by tearing down their fragile civilization can the world truly heal. You have gathered arcane knowledge and harnessed forgotten energies, preparing for theGreat Scourge – a wave of destruction that will reset the balance, even if it means the heroes' futile resistance.",
        },
        {
            text: "The echoing steel canyons of Manhattan become your first stage. Spider-Man swings into view, his youthful face a mask of defiance against your imposing figure amidst the terrified fleeing masses. The air crackles with tension as the web-slinger prepares to defend his city.",
            fight: {
				opponentAtackPower: 15,
                rounds: [
                    {
                        attack_options: [
                            { name: 'Venomous Strike', sucess: true, outcome: 'Your mutated tendril lashes out, striking Spider-Man with surprising speed. He cries out as a potent neurotoxin courses through his veins, momentarily weakening him. He stumbles back, clutching his arm.' },
                            { name: 'Deceptive Illusion', sucess: false, outcome: 'You conjure a fleeting image of collapsing skyscrapers, hoping to disorient your foe. But Spider-Man’s senses are too sharp; he sees through the mirage. He fires a web line, pulling himself towards you and delivering a sharp kick to your chest, dealing 12 damage.' },
                            { name: 'Psychic Onslaught', sucess: false, outcome: 'You attempt to overload Spider-Man’s mind with raw psychic energy. He winces, but his mental fortitude holds. He retaliates with a rapid-fire web net, ensnaring your limbs momentarily, dealing 12 damage.' },
                            { name: 'Ground Tremor', sucess: false, outcome: 'You slam your fist into the ground, hoping to create a shockwave. Spider-Man agilely leaps away, avoiding the tremor. He uses the opportunity to swing above you, dropping debris from a damaged building, dealing 12 damage.' },
						],
                    },
                    {
                        attack_options: [
                            { name: 'Shadow Tendrils', sucess: false, outcome: 'Shadowy appendages erupt from the ground, attempting to grasp Spider-Man. He anticipates the attack, using his webs to swing through the chaotic environment, narrowly avoiding them. He lands on a nearby rooftop, assessing the situation, then fires a web-shot that grazes your arm, dealing 12 damage.' },
                            { name: 'Mind Blast', sucess: false, outcome: 'A focused beam of mental energy shoots towards Spider-Man. His spider-sense tingles, allowing him to dodge the direct hit, though the residual force buffets him. He shoots a web-line towards your face, trying to blind you, dealing 12 damage.' },
                            { name: 'Mutagenic Spores', sucess: false, outcome: 'You release a cloud of toxic spores. Spider-Man quickly covers his face with his mask and retreats, his agility allowing him to evade the worst of the cloud. He fires a web-grenade, hoping to create a diversion, the blast knocking you back slightly and dealing 12 damage.' },
                            { name: 'Crushing Grip', sucess: true, outcome: 'You lunge forward, your enhanced strength allowing you to grab Spider-Man mid-swing. He struggles in your grasp as you squeeze, the metallic tang of his suit filling the air. He gasps for breath.' },
						],
                    },
                    {
                        attack_options: [
                            { name: 'Venomous Injection', sucess: false, outcome: 'You attempt to pierce Spider-Man with a poisoned spike. He twists in your grip, managing to avoid the direct hit, but the spike grazes his side. He winces in pain but manages to break free, webbing to a higher vantage point and shooting several web-balls at you, dealing 12 damage.' },
                            { name: 'Telekinetic Throw', sucess: false, outcome: 'You telekinetically hurl a chunk of rubble at Spider-Man. He expertly webs it, redirecting the debris harmlessly. He then launches a series of web-shooters at your eyes, dealing 12 damage.' },
                            { name: 'Despair Inducement', sucess: false, outcome: 'You project waves of despair, hoping to break Spider-Man’s spirit. He falters for a moment, the weight of the city’s fear pressing down on him, but his unwavering resolve quickly returns. He quips a defiant remark and shoots a web-line, pulling you forward and delivering a punch, dealing 12 damage.' },
                            { name: 'Seismic Smash', sucess: true, outcome: 'With a roar, you bring both fists down on the street. A massive fissure rips through the ground, catching Spider-Man off guard. He tumbles into the crevice, momentarily stunned.' },
						],
                    },
                ]
            }
        },
        {
            text: "Battered but victorious, you retreat into the labyrinthine underbelly of the city. The encounter with Spider-Man has cost you, and the need to replenish your power is paramount. In the shadows, your unnatural energies begin to coalesce, mending your wounds and preparing you for the next confrontation.",
			recharge: 40
        },
        {
            text: "Emerging from your subterranean sanctuary, you find yourself in the desolate ruins of a once-grand museum, now eerily silent. Suddenly, a familiar web-line snaps, and Spider-Man drops down, his posture radiating grim determination. He has tracked you.",
            fight: {
				opponentAtackPower: 18,
                rounds: [
                    {
                        attack_options: [
                            { name: 'Shadow Bolt', sucess: false, outcome: 'A bolt of pure shadow energy hurtles towards Spider-Man. He nimbly dodges, the dark energy dissipating against a marble column. He fires a sticky web, trying to restrain your movement, dealing 15 damage as it hits your arm.' },
                            { name: 'Illusory Double', sucess: false, outcome: 'You create a fleeting illusion of yourself charging in one direction while you move in another. Spider-Man’s senses detect the deception. He swings towards your real position, delivering a swift kick, dealing 15 damage.' },
                            { name: 'Telekinetic Shards', sucess: false, outcome: 'You unleash a barrage of sharp, telekinetically controlled shards of glass. Spider-Man weaves through the debris with practiced ease, his agility unmatched. He shoots a web-line to swing around you, the momentum causing a glancing blow that deals 15 damage.' },
                            { name: 'Constricting Tendrils', sucess: true, outcome: 'Ebon tendrils erupt from the shattered floor, snaking towards Spider-Man. They wrap around his legs, momentarily hindering his movement. He struggles to break free.' },
						],
                    },
                    {
                        attack_options: [
                            { name: 'Mental Domination', sucess: false, outcome: 'You attempt to seize control of Spider-Man’s mind. He clutches his head, momentarily staggered by the psychic intrusion, but his will proves too strong. He fires a taser web, hoping to shock you, the electricity jolting you for 15 damage.' },
                            { name: 'Energy Drain', sucess: false, outcome: 'You project a field of energy drain. Spider-Man quickly leaps away, sensing the siphoning effect. He fires a web-line, trying to pull you off balance, the yank causing you to stumble and take 15 damage as you hit the ground.' },
                            { name: 'Sonic Scream', sucess: false, outcome: 'A piercing sonic scream erupts from your throat. Spider-Man claps his hands over his ears, wincing, but his suit’s dampening technology mitigates the worst of the assault. He throws a smoke bomb to obscure your vision, the impact dealing 15 damage.' },
                            { name: 'Brutal Slam', sucess: true, outcome: 'Exploiting his momentary entanglement, you grab Spider-Man and slam him against a crumbling wall. He groans in pain, the impact jarring him.' },
						],
                    },
                    {
                        attack_options: [
                            { name: 'Venomous Cloud', sucess: false, outcome: 'You release a cloud of corrosive gas. Spider-Man quickly webs up his airways and retreats, the gas eating away at the ancient artifacts. He fires a web net, trying to trap you, the sticky substance hindering your movement and dealing 15 damage as it burns slightly.' },
                            { name: 'Psychic Assault', sucess: false, outcome: 'You unleash a focused psychic attack. Spider-Man’s spider-sense flares violently, allowing him to narrowly avoid the brunt of the force. He counters with a rapid series of web-shots, each hitting and dealing 15 damage.' },
                            { name: 'Ground Rupture', sucess: false, outcome: 'You cause the ground beneath Spider-Man to crack and shift. He uses his webs to maintain his balance, swinging precariously above the chasm. He shoots a web-line towards your face, dealing 15 damage as it strikes.' },
                            { name: 'Crippling Blow', sucess: true, outcome: 'Seizing an opening, you deliver a powerful, bone-jarring blow to Spider-Man. He collapses to the ground, momentarily winded.' },
						],
                    },
                ]
            }
        },
        {
            text: "Once again, you stand victorious, though the resilience of the web-slinger is undeniable. You disappear into the shadows, seeking another respite to recover your strength before facing the next inevitable challenge. The world's protectors are persistent, but your resolve remains unbroken.",
			recharge: 35
        },
        {
            text: "Your path of destruction leads you to the mystical Sanctum Sanctorum, its ancient wards now disrupted by your malevolent presence. Dr. Stephen Strange appears, his eyes radiating arcane power, the Cloak of Levitation swirling around him like a sentient guardian. The air hums with raw magical energy.",
            fight: {
				opponentAtackPower: 16,
                rounds: [
                    {
                        attack_options: [
                            { name: 'Shadow Lance', sucess: false, outcome: 'A lance of solidified shadow pierces the air towards Doctor Strange. He effortlessly conjures a shimmering mystical shield, deflecting the dark energy. Runes glow on the shield’s surface. The deflected energy strikes a nearby bookshelf, sending splinters your way, dealing 13 damage.' },
                            { name: 'Mental Intrusion', sucess: false, outcome: 'You attempt to invade Doctor Strange’s mind, seeking to overwhelm his consciousness. He closes his eyes, his brow furrowed in concentration, and erects powerful mental barriers, repelling your assault. He counters with a telepathic probe of his own, causing a sharp pain in your temples and dealing 13 damage.' },
                            { name: 'Void Tendrils', sucess: false, outcome: 'Tendrils of pure void reach out to ensnare Doctor Strange. The Cloak of Levitation reacts instantly, whipping around him and deflecting the shadowy appendages. The Cloak then lashes out towards you, its mystical force hitting you for 13 damage.' },
                            { name: 'Chaos Bolt', sucess: true, outcome: 'A raw bolt of chaotic energy erupts from your hand, unpredictable and volatile. Doctor Strange attempts to shield himself, but the energy twists and strikes him, causing him to stumble back, a flicker of surprise in his eyes.' },
						],
                    },
                    {
                        attack_options: [
                            { name: 'Illusory Assault', sucess: false, outcome: 'You conjure terrifying illusions to disorient Doctor Strange – grotesque creatures and collapsing realities. He remains unfazed, his gaze steady as he sees through the phantasms. He weaves intricate hand gestures, preparing a counter-spell. The dissipating illusions leave a residual magical energy that shocks you for 13 damage.' },
                            { name: 'Energy Drain Field', sucess: false, outcome: 'You project a field designed to drain magical energies. Doctor Strange steps back, the Cloak of Levitation pulling him away from the field’s influence. He summons glowing mystical bindings, one of which wraps around your arm and constricts, dealing 13 damage.' },
                            { name: 'Sonic Disruption', sucess: false, outcome: 'A wave of disorienting sonic frequencies washes over Doctor Strange. He casts a protective enchantment, the air around him shimmering, mitigating the sonic assault. He retaliates with a blast of pure arcane energy that strikes your chest, dealing 13 damage.' },
                            { name: 'Telekinetic Crush', sucess: true, outcome: 'You focus your will, attempting to crush Doctor Strange with immense telekinetic force. He strains against the invisible pressure, his magical aura flaring as he struggles to maintain his form. He gasps for air.' },
						],
                    },
                    {
                        attack_options: [
                            { name: 'Shadow Miasma', sucess: false, outcome: 'You release a cloud of suffocating shadow. Doctor Strange conjures a swirling vortex of light, dispelling the darkness. He then unleashes a barrage of mystical projectiles, one of which hits your leg, dealing 13 damage.' },
                            { name: 'Psychic Drain', sucess: false, outcome: 'You attempt to siphon Doctor Strange’s psychic energy. He focuses his mind, drawing upon ancient reserves of power, and repels your attempt. He projects an image of binding runes, and the feedback from your failed attempt causes a psychic backlash, dealing 13 damage.' },
                            { name: 'Dimensional Rift', sucess: false, outcome: 'You try to open a small, disorienting dimensional rift near Doctor Strange. He swiftly seals the anomaly with a flick of his wrist, the fabric of reality mending itself. He then conjures a mystical whip of pure energy that lashes out and strikes you, dealing 13 damage.' },
                            { name: 'Soul Scythe', sucess: true, outcome: 'A spectral scythe of pure negative energy materializes in your hand, and you swing it towards Doctor Strange. He attempts to evade, but the scythe grazes his side, leaving a chilling cold in its wake. He cries out in pain.' },
						],
                    },
                ]
            }
        },
        {
            text: "The Master of the Mystic Arts has fallen, his defenses shattered by your relentless assault. The Sanctum Sanctorum lies in ruins, its protective magic undone. You gather your strength, the echoes of arcane energies fueling your dark purpose. The final stage of your plan is within reach.",
			recharge: 45
        },
        {
            text: "The world lies broken before you. Your Great Scourge has swept across the globe, leaving once-vibrant cities as desolate husks. The heroes who dared to oppose you are defeated, their sacrifices ultimately futile. A grim silence descends as you stand amidst the ruins, the architect of a new, desolate world. The balance has been reset, as you envisioned. Your reign has begun.",
        }
    ]
};

export default gameData;