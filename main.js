console.log('Aula sobre functions')

// criar um aplicativo de frases motivacionais.
/* console.log('Estudar é muito bom!')
console.log('Paciência e persistência.')
console.log('Revisão é mãe do aprendizado!') */

const phrases= [
    'Comece onde você está, use o que você tem e faça o que você pode.',
    'Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.',
    'Não importa que você vá devagar, contanto que você não pare.',
    'A inspiração existe, porém temos que encontrá-la trabalhando.',
    'Coragem é saber o que não temer.',
    'Conhecer a si mesmo é o começo de toda sabedoria.',
    'Acredite em milagres, mas não dependa deles.',
    'Não existe nada de completamente errado no mundo, mesmo um relógio parado, consegue estar certo duas vezes por dia.',
    'A vida é 10% o que acontece a você e 90% como você reage a isso.',
]

const authorPhrases = [
    'Arthur Ashe',
    'Roberto Shinyashiki',
    'Confúcio',
    'Pablo Picasso',
    'Platão',
    'Aristóteles',
    'Immanuel Kant',
    'Paulo Coelho',
    'Charles Swindoll'
]

function generatePhraseMotivation() {
    const randomPhrase = Math.floor(Math.random() * phases.length)
    document.getElementById('changePhrases').innerHTML = phases[randomPhrase]
    document.getElementById('authorPhrases').innerHTML = authorPhases[randomPhrase]
}
