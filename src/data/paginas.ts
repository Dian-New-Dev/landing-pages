interface paginasTipa {
    thumbnail: string;
    link: string;
    tags: [string, string];
}

const paginas: paginasTipa[] = [
    {
        thumbnail: "src",
        link: "R$ 199,99",
        tags: ['tag1', 'tag2']
    },
];

export default paginas;