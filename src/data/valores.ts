import muscleIcon from '../assets/icons/muscle.png';
import starIcon from '../assets/icons/star.png';
import startupIcon from '../assets/icons/startup.png'

interface items {
    item: string;
    legenda: string;
}

interface valores {
    tipo: string;
    icone: string;
    preco: string;
    inclui: items[];
}

const valores: valores[] = [
    {
        tipo: "Básico",
        icone: muscleIcon,
        preco: "R$ 199,99",
        inclui: [
            {item: '1 Landing Page', legenda: 'Página moderna, cativante e efetiva.'},
            {item: '3 meses de atualização', legenda: 'Sem custo para mudanças no conteúdo da página (textos, imagens, cores, etc).'},
            {item: 'Manutenção Técnica Vitalícia', legenda: 'Garantimos assistência técnica remota, sem custo, enquanto a página estiver sendo utilizada.'},
        ]
    },
    {
        tipo: "Médio",
        icone: starIcon,
        preco: "R$ 299,99",
        inclui: [
            {item: '1 Landing Page', legenda: 'Página moderna, cativante e efetiva.'},
            {item: '6 meses de atualização', legenda: 'Sem custo para mudanças no conteúdo da página (textos, imagens, cores, etc).'},
            {item: 'Manutenção Técnica Vitalícia', legenda: 'Garantimos assistência técnica remota, sem custo, enquanto a página estiver sendo utilizada.'},
            {item: 'Até 3 revisões pós-entrega', legenda: 'Incorporamos seu feedback no desenvolvimeento de uma nova versão que se aproxime mais da sua visão.'},
        ]
    },
    {
        tipo: "Avançado",
        icone: startupIcon,
        preco: "R$ 399,99",
        inclui: [
            {item: '1 Landing Page', legenda: 'Página moderna, cativante e efetiva.'},
            {item: '12 meses de atualização', legenda: 'Sem custo para mudanças no conteúdo da página (textos, imagens, cores, etc).'},
            {item: 'Manutenção Técnica Vitalícia', legenda: 'Garantimos assistência técnica remota, sem custo, enquanto a página estiver sendo utilizada.'},
            {item: 'Até 7 revisões pós-entrega', legenda: 'Incorporamos seu feedback no desenvolvimeento de uma nova versão que se aproxime mais da sua visão.'},
            {item: 'Google Analytics', legenda: 'Incorporamos funcionalidades do Google Analytics para você monitorar o tráfego virtual da sua página.'},

        
        ]
    },
];

export default valores;