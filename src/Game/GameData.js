const gameData = {
    title: 'Oblivion\'s Grasp',
	introduction: 'You are Malakor, a being of immense power and bitter resentment. The so-called heroes of Earth, the Marvel champions, stand as pathetic obstacles in your path to ultimate annihilation. This is a turn-based struggle where you, the villain, will unleash your fury and watch the world crumble.',
	mainCharacterDeathScene: 'The light fades from Malakor\'s eyes, his immense form collapsing into dust as the final, desperate blow lands. A hollow laugh escapes his lips, a sound swallowed by the silence of a world he failed to conquer. Yet, in that final moment, a flicker of something unreadable crosses his face – regret? Satisfaction? The universe will never know.',
    chapters:[
        {
            text: "Born into a dimension ravaged by cosmic indifference, Malakor witnessed the slow decay of his civilization. The 'heroes' of that realm were too few, too weak, their ideals hollow against the inevitable entropy. Now, fueled by this loss and a burning conviction that only absolute destruction can prevent further suffering, Malakor seeks to erase this flawed reality and begin anew in the void.",
        },
        {
            text: "The skeletal skyscrapers of a ruined Manhattan pierce the toxic sky. Amidst the debris, a lone figure in red and blue swings into view, his mask glinting with determined resolve. Spider-Man lands lightly on a shattered rooftop, his voice echoing through the desolate cityscape. 'Malakor! This ends now!' he declares, webs already tightening around his gloved fists.",
            fight: {
				opponentAttackPower: 15,
                opponentDeath: "Spider-Man's body lies limp against the rubble, his iconic mask cracked and askew. The vibrant colors of his suit seem muted against the gray decay of the city. A single strand of web weakly extends from his hand, a testament to his last, futile attempt to stop you. Silence descends upon the ruins, broken only by the whistling wind.",
                rounds: [
                    {
                        attack_options: [
                            { name: 'Shadow Tendrils', action: 'lash out with shadowy appendages', success: false, outcome: 'Your tendrils whip through the air, but Spider-Man, with his uncanny agility, flips away. He counters with a swift jab to your side, dealing 15 damage.' },
                            { name: 'Psychic Onslaught', action: 'unleash a wave of mental force', success: true, outcome: 'A searing psychic wave crashes into Spider-Man, staggering him. He clutches his head, momentarily stunned.' },
                            { name: 'Void Blast', action: 'fire a concentrated beam of dark energy', success: false, outcome: 'The Void Blast streaks towards Spider-Man, but his spider-sense flares, and he narrowly dodges, the energy scorching the building behind him. He fires a web-line, pulling himself closer for an attack.' },
                            { name: 'Deceptive Illusion', action: 'create a fleeting image to confuse', success: false, outcome: 'The illusion flickers for a moment, but Spider-Man\'s enhanced senses pierce through the deception. He shoots a web, ensnaring your arm.' },
						],
					},
                    {
                        attack_options: [
                            { name: 'Shadow Tendrils', action: 'lash out with shadowy appendages', success: false, outcome: 'Again, your shadowy tendrils fail to connect as Spider-Man somersaults away. He lands a series of quick punches, each strike surprisingly potent, dealing 15 damage.' },
                            { name: 'Psychic Onslaught', action: 'unleash a wave of mental force', success: false, outcome: 'Spider-Man anticipates your mental assault, firing a web-grenade that explodes, disorienting you. He uses the opportunity to swing in close.' },
                            { name: 'Void Blast', action: 'fire a concentrated beam of dark energy', success: true, outcome: 'A direct hit! The Void Blast slams into Spider-Man, the force throwing him back against a crumbling wall. He slumps down, unmoving.' },
                            { name: 'Deceptive Illusion', action: 'create a fleeting image to confuse', success: false, outcome: 'The illusion is easily dismissed by the fallen hero. He remains still.' },
						]
					}
                ]
            }
        },
        {
            text: "Battered but victorious, you retreat into the labyrinthine underbelly of the city. The encounter with Spider-Man has cost you, and the need to replenish your power is paramount. In the shadows, your unnatural energies begin to coalesce, mending your wounds and preparing you for the next confrontation.",
			recharge: 40
        },
        {
            text: "The world burns. Cities lie in smoldering ruins, the vibrant tapestry of human civilization torn to shreds. Above the ravaged Earth, Malakor watches, a grim satisfaction etched onto his features. The cries of defiance have been silenced, the heroes vanquished. In the desolate silence, a new order begins – an order born from destruction, a testament to the futility of hope. The void awaits, ready to be filled by the ashes of the old world.",
        }
    ]
};

export default gameData;