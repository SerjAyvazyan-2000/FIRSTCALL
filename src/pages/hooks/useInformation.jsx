import blogDetails from "../../assets/images/blogDetails.png"
import arrowDown from "../../assets/svgIcons/ArrowDownRight (7).svg"
import aboutImg from "../../assets/images/Property 1=Default.png"
import aboutImg1 from "../../assets/images/philosophy 2.jpg"
import image from "../../assets/images/Property 1=Default.png"

const useInformation = () => {


    const blogList = [
        {
            img: image,
            title: 'Lorem ipsum dolor sit amet, ctetur adipiscing elit',
            data: 'august 30, 2023',
            name: 'Irma Kern, CEO',
            info: '4min read',
            description: 'Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ' +
                'ipsum id sapien. Vestibulum malesuada orci sit amet pretium facilisis. In lobortis congue augue, a commodo libero' +
                ' tincidunt scelerisque. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ' +
                'ipsum id sapien.' +
                'Vestibulum malesuada orci sit amet pretium facilisis. In lobortis congue augue, a commodo libero tincidunt scelerisque.',
            readMore: 'Read more',
            id: 1,
            details: {
                title: 'Quest-ce que le Lorem Ipsum?',
                text: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n\'a pas fait que survivre cinq siècles, mais s\'est aussi adapté à la bureautique informatique, sans que son contenu n\'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.\n' +
                    'Pourquoi l\'utiliser?\n' +
                    'On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source' +
                    ' de distractions, et empêche de se concentrer sur la mise en page elle-même. L\'avantage du Lorem Ipsum sur un texte générique comme \'Du texte. Du texte. Du texte.\' est qu\'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour \'Lorem Ipsum\' vous conduira vers de nombreux sites qui n\'en sont encore qu\'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, ' +
                    'souvent intentionnellement (histoire d\'y rajouter de petits clins d\'oeil, voire des phrases embarassantes).',
                subTitle: 'Doù vient-il?',
                subText: '\n' +
                    'Contrairement à une opinion répandue, le Lorem Ipsum n\'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s\'est intéressé à un des mots latins les plus obscurs, consectetur, extrait d\'un passage du Lorem Ipsum, et en étudiant tous les usages de ce mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient en fait des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de l\'éthique. Les premières lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...", proviennent de la section 1.10.32.\n' +
                    'L\'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour les curieux. Les sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" de Cicéron sont aussi' +
                    ' reproduites dans leur version originale, accompagnée de la traduction anglaise de H. Rackham (1914).',
                img: blogDetails


            }

        },
        {
            img: image,
            title: 'Lorem ipsum dolor sit amet, ctetur adipiscing elit',
            data: 'august 30, 2023',
            name: 'Irma Kern, CEO',
            info: '4min read',
            description: 'Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ' +
                'ipsum id sapien. Vestibulum malesuada orci sit amet pretium facilisis. In lobortis congue augue, a commodo libero' +
                ' tincidunt scelerisque. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ' +
                'ipsum id sapien.' +
                'Vestibulum malesuada orci sit amet pretium facilisis. In lobortis congue augue, a commodo libero tincidunt scelerisque.',
            readMore: 'Read more',

            id: 2,
            details: {
                title: 'Quest-ce que le Lorem Ipsum?',
                text: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n\'a pas fait que survivre cinq siècles, mais s\'est aussi adapté à la bureautique informatique, sans que son contenu n\'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.\n' +
                    'Pourquoi l\'utiliser?\n' +
                    'On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source' +
                    ' de distractions, et empêche de se concentrer sur la mise en page elle-même. L\'avantage du Lorem Ipsum sur un texte générique comme \'Du texte. Du texte. Du texte.\' est qu\'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour \'Lorem Ipsum\' vous conduira vers de nombreux sites qui n\'en sont encore qu\'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, ' +
                    'souvent intentionnellement (histoire d\'y rajouter de petits clins d\'oeil, voire des phrases embarassantes).',
                subTitle: 'Doù vient-il?',
                subText: '\n' +
                    'Contrairement à une opinion répandue, le Lorem Ipsum n\'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s\'est intéressé à un des mots latins les plus obscurs, consectetur, extrait d\'un passage du Lorem Ipsum, et en étudiant tous les usages de ce mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient en fait des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de l\'éthique. Les premières lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...", proviennent de la section 1.10.32.\n' +
                    'L\'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour les curieux. Les sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" de Cicéron sont aussi' +
                    ' reproduites dans leur version originale, accompagnée de la traduction anglaise de H. Rackham (1914).',
                img: blogDetails


            }

        },
        {
            img: image,
            title: 'Lorem ipsum dolor sit amet, ctetur adipiscing elit',
            data: 'august 30, 2023',
            name: 'Irma Kern, CEO',
            info: '4min read',
            description: 'Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ' +
                'ipsum id sapien. Vestibulum malesuada orci sit amet pretium facilisis. In lobortis congue augue, a commodo libero' +
                ' tincidunt scelerisque. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ' +
                'ipsum id sapien.' +
                'Vestibulum malesuada orci sit amet pretium facilisis. In lobortis congue augue, a commodo libero tincidunt scelerisque.',
            readMore: 'Read more',

            id: 3,
            details: {
                title: 'Quest-ce que le Lorem Ipsum?',
                text: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n\'a pas fait que survivre cinq siècles, mais s\'est aussi adapté à la bureautique informatique, sans que son contenu n\'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.\n' +
                    'Pourquoi l\'utiliser?\n' +
                    'On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source' +
                    ' de distractions, et empêche de se concentrer sur la mise en page elle-même. L\'avantage du Lorem Ipsum sur un texte générique comme \'Du texte. Du texte. Du texte.\' est qu\'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour \'Lorem Ipsum\' vous conduira vers de nombreux sites qui n\'en sont encore qu\'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, ' +
                    'souvent intentionnellement (histoire d\'y rajouter de petits clins d\'oeil, voire des phrases embarassantes).',
                subTitle: 'Doù vient-il?',
                subText: '\n' +
                    'Contrairement à une opinion répandue, le Lorem Ipsum n\'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s\'est intéressé à un des mots latins les plus obscurs, consectetur, extrait d\'un passage du Lorem Ipsum, et en étudiant tous les usages de ce mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient en fait des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de l\'éthique. Les premières lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...", proviennent de la section 1.10.32.\n' +
                    'L\'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour les curieux. Les sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" de Cicéron sont aussi' +
                    ' reproduites dans leur version originale, accompagnée de la traduction anglaise de H. Rackham (1914).',
                img: blogDetails


            }

        },

        {
            img: image,
            title: 'Lorem ipsum dolor sit amet, ctetur adipiscing elit',
            data: 'august 30, 2023',
            name: 'Irma Kern, CEO',
            info: '4min read',
            description: 'Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ' +
                'ipsum id sapien. Vestibulum malesuada orci sit amet pretium facilisis. In lobortis congue augue, a commodo libero' +
                ' tincidunt scelerisque. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ' +
                'ipsum id sapien.' +
                'Vestibulum malesuada orci sit amet pretium facilisis. In lobortis congue augue, a commodo libero tincidunt scelerisque.',
            readMore: 'Read more',
            id: 4,
            details: {
                title: 'Quest-ce que le Lorem Ipsum?',
                text: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n\'a pas fait que survivre cinq siècles, mais s\'est aussi adapté à la bureautique informatique, sans que son contenu n\'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.\n' +
                    'Pourquoi l\'utiliser?\n' +
                    'On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source' +
                    ' de distractions, et empêche de se concentrer sur la mise en page elle-même. L\'avantage du Lorem Ipsum sur un texte générique comme \'Du texte. Du texte. Du texte.\' est qu\'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour \'Lorem Ipsum\' vous conduira vers de nombreux sites qui n\'en sont encore qu\'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, ' +
                    'souvent intentionnellement (histoire d\'y rajouter de petits clins d\'oeil, voire des phrases embarassantes).',
                subTitle: 'Doù vient-il?',
                subText: '\n' +
                    'Contrairement à une opinion répandue, le Lorem Ipsum n\'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s\'est intéressé à un des mots latins les plus obscurs, consectetur, extrait d\'un passage du Lorem Ipsum, et en étudiant tous les usages de ce mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient en fait des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de l\'éthique. Les premières lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...", proviennent de la section 1.10.32.\n' +
                    'L\'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour les curieux. Les sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" de Cicéron sont aussi' +
                    ' reproduites dans leur version originale, accompagnée de la traduction anglaise de H. Rackham (1914).',
                img: blogDetails


            }

        },
        {
            img: image,
            title: 'Lorem ipsum dolor sit amet, ctetur adipiscing elit',
            data: 'august 30, 2023',
            name: 'Irma Kern, CEO',
            info: '4min read',
            description: 'Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ' +
                'ipsum id sapien. Vestibulum malesuada orci sit amet pretium facilisis. In lobortis congue augue, a commodo libero' +
                ' tincidunt scelerisque. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ' +
                'ipsum id sapien.' +
                'Vestibulum malesuada orci sit amet pretium facilisis. In lobortis congue augue, a commodo libero tincidunt scelerisque.',
            readMore: 'Read more',

            id: 5,
            details: {
                title: 'Quest-ce que le Lorem Ipsum?',
                text: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n\'a pas fait que survivre cinq siècles, mais s\'est aussi adapté à la bureautique informatique, sans que son contenu n\'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.\n' +
                    'Pourquoi l\'utiliser?\n' +
                    'On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source' +
                    ' de distractions, et empêche de se concentrer sur la mise en page elle-même. L\'avantage du Lorem Ipsum sur un texte générique comme \'Du texte. Du texte. Du texte.\' est qu\'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour \'Lorem Ipsum\' vous conduira vers de nombreux sites qui n\'en sont encore qu\'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, ' +
                    'souvent intentionnellement (histoire d\'y rajouter de petits clins d\'oeil, voire des phrases embarassantes).',
                subTitle: 'Doù vient-il?',
                subText: '\n' +
                    'Contrairement à une opinion répandue, le Lorem Ipsum n\'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s\'est intéressé à un des mots latins les plus obscurs, consectetur, extrait d\'un passage du Lorem Ipsum, et en étudiant tous les usages de ce mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient en fait des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de l\'éthique. Les premières lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...", proviennent de la section 1.10.32.\n' +
                    'L\'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour les curieux. Les sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" de Cicéron sont aussi' +
                    ' reproduites dans leur version originale, accompagnée de la traduction anglaise de H. Rackham (1914).',
                img: blogDetails


            }


        },
        {
            img: image,
            title: 'Lorem ipsum dolor sit amet, ctetur adipiscing elit',
            data: 'august 30, 2023',
            name: 'Irma Kern, CEO',
            info: '4min read',
            description: 'Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ' +
                'ipsum id sapien. Vestibulum malesuada orci sit amet pretium facilisis. In lobortis congue augue, a commodo libero' +
                ' tincidunt scelerisque. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ' +
                'ipsum id sapien.' +
                'Vestibulum malesuada orci sit amet pretium facilisis. In lobortis congue augue, a commodo libero tincidunt scelerisque.',
            readMore: 'Read more',

            id: 6,
            details: {
                title: 'Quest-ce que le Lorem Ipsum?',
                text: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n\'a pas fait que survivre cinq siècles, mais s\'est aussi adapté à la bureautique informatique, sans que son contenu n\'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.\n' +
                    'Pourquoi l\'utiliser?\n' +
                    'On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source' +
                    ' de distractions, et empêche de se concentrer sur la mise en page elle-même. L\'avantage du Lorem Ipsum sur un texte générique comme \'Du texte. Du texte. Du texte.\' est qu\'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour \'Lorem Ipsum\' vous conduira vers de nombreux sites qui n\'en sont encore qu\'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, ' +
                    'souvent intentionnellement (histoire d\'y rajouter de petits clins d\'oeil, voire des phrases embarassantes).',
                subTitle: 'Doù vient-il?',
                subText: '\n' +
                    'Contrairement à une opinion répandue, le Lorem Ipsum n\'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s\'est intéressé à un des mots latins les plus obscurs, consectetur, extrait d\'un passage du Lorem Ipsum, et en étudiant tous les usages de ce mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient en fait des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de l\'éthique. Les premières lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...", proviennent de la section 1.10.32.\n' +
                    'L\'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour les curieux. Les sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" de Cicéron sont aussi' +
                    ' reproduites dans leur version originale, accompagnée de la traduction anglaise de H. Rackham (1914).',
                img: blogDetails


            }

        },

        {
            img: image,
            title: 'Lorem ipsum dolor sit amet, ctetur adipiscing elit',
            data: 'august 30, 2023',
            name: 'Irma Kern, CEO',
            info: '4min read',
            description: 'Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ' +
                'ipsum id sapien. Vestibulum malesuada orci sit amet pretium facilisis. In lobortis congue augue, a commodo libero' +
                ' tincidunt scelerisque. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ' +
                'ipsum id sapien.' +
                'Vestibulum malesuada orci sit amet pretium facilisis. In lobortis congue augue, a commodo libero tincidunt scelerisque.',
            readMore: 'Read more',
            id: 7,
            details: {
                title: 'Quest-ce que le Lorem Ipsum?',
                text: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n\'a pas fait que survivre cinq siècles, mais s\'est aussi adapté à la bureautique informatique, sans que son contenu n\'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.\n' +
                    'Pourquoi l\'utiliser?\n' +
                    'On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source' +
                    ' de distractions, et empêche de se concentrer sur la mise en page elle-même. L\'avantage du Lorem Ipsum sur un texte générique comme \'Du texte. Du texte. Du texte.\' est qu\'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour \'Lorem Ipsum\' vous conduira vers de nombreux sites qui n\'en sont encore qu\'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, ' +
                    'souvent intentionnellement (histoire d\'y rajouter de petits clins d\'oeil, voire des phrases embarassantes).',
                subTitle: 'Doù vient-il?',
                subText: '\n' +
                    'Contrairement à une opinion répandue, le Lorem Ipsum n\'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s\'est intéressé à un des mots latins les plus obscurs, consectetur, extrait d\'un passage du Lorem Ipsum, et en étudiant tous les usages de ce mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient en fait des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de l\'éthique. Les premières lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...", proviennent de la section 1.10.32.\n' +
                    'L\'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour les curieux. Les sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" de Cicéron sont aussi' +
                    ' reproduites dans leur version originale, accompagnée de la traduction anglaise de H. Rackham (1914).',
                img: blogDetails


            }

        },
        {
            img: image,
            title: 'Lorem ipsum dolor sit amet, ctetur adipiscing elit',
            data: 'august 30, 2023',
            name: 'Irma Kern, CEO',
            info: '4min read',
            description: 'Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ' +
                'ipsum id sapien. Vestibulum malesuada orci sit amet pretium facilisis. In lobortis congue augue, a commodo libero' +
                ' tincidunt scelerisque. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ' +
                'ipsum id sapien.' +
                'Vestibulum malesuada orci sit amet pretium facilisis. In lobortis congue augue, a commodo libero tincidunt scelerisque.',
            readMore: 'Read more',

            id: 8,
            details: {
                title: 'Quest-ce que le Lorem Ipsum?',
                text: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n\'a pas fait que survivre cinq siècles, mais s\'est aussi adapté à la bureautique informatique, sans que son contenu n\'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.\n' +
                    'Pourquoi l\'utiliser?\n' +
                    'On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source' +
                    ' de distractions, et empêche de se concentrer sur la mise en page elle-même. L\'avantage du Lorem Ipsum sur un texte générique comme \'Du texte. Du texte. Du texte.\' est qu\'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour \'Lorem Ipsum\' vous conduira vers de nombreux sites qui n\'en sont encore qu\'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, ' +
                    'souvent intentionnellement (histoire d\'y rajouter de petits clins d\'oeil, voire des phrases embarassantes).',
                subTitle: 'Doù vient-il?',
                subText: '\n' +
                    'Contrairement à une opinion répandue, le Lorem Ipsum n\'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s\'est intéressé à un des mots latins les plus obscurs, consectetur, extrait d\'un passage du Lorem Ipsum, et en étudiant tous les usages de ce mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient en fait des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de l\'éthique. Les premières lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...", proviennent de la section 1.10.32.\n' +
                    'L\'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour les curieux. Les sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" de Cicéron sont aussi' +
                    ' reproduites dans leur version originale, accompagnée de la traduction anglaise de H. Rackham (1914).',
                img: blogDetails


            }

        },
        {
            img: image,
            title: 'Lorem ipsum dolor sit amet, ctetur adipiscing elit',
            data: 'august 30, 2023',
            name: 'Irma Kern, CEO',
            info: '4min read',
            description: 'Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ' +
                'ipsum id sapien. Vestibulum malesuada orci sit amet pretium facilisis. In lobortis congue augue, a commodo libero' +
                ' tincidunt scelerisque. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ' +
                'ipsum id sapien.' +
                'Vestibulum malesuada orci sit amet pretium facilisis. In lobortis congue augue, a commodo libero tincidunt scelerisque.',
            readMore: 'Read more',

            id: 9,
            details: {
                title: 'Quest-ce que le Lorem Ipsum?',
                text: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n\'a pas fait que survivre cinq siècles, mais s\'est aussi adapté à la bureautique informatique, sans que son contenu n\'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.\n' +
                    'Pourquoi l\'utiliser?\n' +
                    'On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source' +
                    ' de distractions, et empêche de se concentrer sur la mise en page elle-même. L\'avantage du Lorem Ipsum sur un texte générique comme \'Du texte. Du texte. Du texte.\' est qu\'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour \'Lorem Ipsum\' vous conduira vers de nombreux sites qui n\'en sont encore qu\'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, ' +
                    'souvent intentionnellement (histoire d\'y rajouter de petits clins d\'oeil, voire des phrases embarassantes).',
                subTitle: 'Doù vient-il?',
                subText: '\n' +
                    'Contrairement à une opinion répandue, le Lorem Ipsum n\'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s\'est intéressé à un des mots latins les plus obscurs, consectetur, extrait d\'un passage du Lorem Ipsum, et en étudiant tous les usages de ce mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient en fait des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de l\'éthique. Les premières lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...", proviennent de la section 1.10.32.\n' +
                    'L\'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour les curieux. Les sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" de Cicéron sont aussi' +
                    ' reproduites dans leur version originale, accompagnée de la traduction anglaise de H. Rackham (1914).',
                img: blogDetails


            }

        },


    ]
    const blogSequence = [
        {number: '1', id: 1},
        {number: '2', id: 1},
        {number: '3', id: 1},
        {number: '4', id: 1},
        {number: '5', id: 1},
        {number: '6', id: 1},

    ]

    const rolesList = [
        {
            title: 'Internal sales force with focus on telesales (m/f/d)',
            description: "Attention, sales cracks! We are looking for sales talents who are really into telesales. Our company is a powerhouse for software solutions across various industries, and we are looking for dedicated inside sales people (m/f/d) to join our dream team. We don't just sell -" +
                " we really put our heart and soul into individual, expert advice that....",
            route: 'APPLY FOR A JOB',
            icon: arrowDown,
            id: 1,
            details: {
                title1: 'Internal sales force with focus on telesales (m/f/d)',
                subTilte: 'Attention, sales cracks! We are looking for sales talents who are really into telesales. Our company is a powerhouse for software solutions across various industries, and we are looking' +
                    ' for dedicated inside sales people (m/f/d) to join our dream team. ',
                subTitleChild: 'We don\'t just sell - we really put our heart and soul into individual, expert advice that blows our customers away.',
                subTitleChild2: 'Are you ready to bring your sales talent to us and take off together with us? Then go for it!',
                subTitleChild3: 'Please note: At 520 base, working hours are from 09:00 to 12:00. ',
                title2: 'Duties:',
                point1: "Calendar King: You are the master of making appointments! Get ready to organize the field like a pro and make the calendar glow.",
                point2: "Software Wizard: Your magic is providing expert advice! Help our customers find the perfect software solution and use it like a pro.",
                point3: "Software Wizard: Your magic is providing expert advice! Help our customers find the perfect software solution and use it like a pro.",
                point4: "Software Wizard: Your magic is providing expert advice! Help our customers find the perfect software solution and use it like a pro.",
                point5: "Software Wizard: Your magic is providing expert advice! Help our customers find the perfect software solution and use it like a pro.",
                point6: "Software Wizard: Your magic is providing expert advice! Help our customers find the perfect software solution and use it like a pro.",
                title3: 'Requirements:',
                point7: "Software Wizard: Your magic is providing expert advice! Help our customers find the perfect software solution and use it like a pro.",
                point8: "Software Wizard: Your magic is providing expert advice! Help our customers find the perfect software solution and use it like a pro.",
                point9: "Software Wizard: Your magic is providing expert advice! Help our customers find the perfect software solution and use it like a pro.",
                point10: "Software Wizard: Your magic is providing expert advice! Help our customers find the perfect software solution and use it like a pro.",
                point11: "Software Wizard: Your magic is providing expert advice! Help our customers find the perfect software solution and use it like a pro.",
                point12: "Software Wizard: Your magic is providing expert advice! Help our customers find the perfect software solution and use it like a pro.",
                title: 'We offer:',
                point13: "Software Wizard: Your magic is providing expert advice! Help our customers find the perfect software solution and use it like a pro.",
                point14: "Software Wizard: Your magic is providing expert advice! Help our customers find the perfect software solution and use it like a pro.",
                point15: "Software Wizard: Your magic is providing expert advice! Help our customers find the perfect software solution and use it like a pro.",
                point16: "Software Wizard: Your magic is providing expert advice! Help our customers find the perfect software solution and use it like a pro.",
                point17: "Software Wizard: Your magic is providing expert advice! Help our customers find the perfect software solution and use it like a pro.",
                point18: "Software Wizard: Your magic is providing expert advice! Help our customers find the perfect software solution and use it like a pro.",

            }
        },
        {
            title: 'Internal sales force with focus on telesales (m/f/d)',
            description: "Attention, sales cracks! We are looking for sales talents who are really into telesales. Our company is a powerhouse for software solutions across various industries, and we are looking for dedicated inside sales people (m/f/d) to join our dream team. We don't just sell -" +
                " we really put our heart and soul into individual, expert advice that....",
            route: 'APPLY FOR A JOB',
            icon: arrowDown,
            id: 2
        },
        {
            title: 'Internal sales force with focus on telesales (m/f/d)',
            description: "Attention, sales cracks! We are looking for sales talents who are really into telesales. Our company is a powerhouse for software solutions across various industries, and we are looking for dedicated inside sales people (m/f/d) to join our dream team. We don't just sell -" +
                " we really put our heart and soul into individual, expert advice that....",
            route: 'APPLY FOR A JOB',
            icon: arrowDown,
            id: 2
        },
        {
            title: 'Internal sales force with focus on telesales (m/f/d)',
            description: "Attention, sales cracks! We are looking for sales talents who are really into telesales. Our company is a powerhouse for software solutions across various industries, and we are looking for dedicated inside sales people (m/f/d) to join our dream team. We don't just sell -" +
                " we really put our heart and soul into individual, expert advice that....",
            route: 'APPLY FOR A JOB',
            icon: arrowDown,
            id: 4
        },
        {
            title: 'Internal sales force with focus on telesales (m/f/d)',
            description: "Attention, sales cracks! We are looking for sales talents who are really into telesales. Our company is a powerhouse for software solutions across various industries, and we are looking for dedicated inside sales people (m/f/d) to join our dream team. We don't just sell -" +
                " we really put our heart and soul into individual, expert advice that....",
            route: 'APPLY FOR A JOB',
            icon: arrowDown,
            id: 5
        },
        {
            title: 'Internal sales force with focus on telesales (m/f/d)',
            description: "Attention, sales cracks! We are looking for sales talents who are really into telesales. Our company is a powerhouse for software solutions across various industries, and we are looking for dedicated inside sales people (m/f/d) to join our dream team. We don't just sell -" +
                " we really put our heart and soul into individual, expert advice that....",
            route: 'APPLY FOR A JOB',
            icon: arrowDown,
            id: 6
        },
    ]

    const aboutUs = [
        {
            title: "our philosophy",
            description: '"We are more than just a call centre. We are your partner in success. Learn more about our history, our values and our team."\n' +
                'FirstCallAgency stands for more than just telephone sales. We are advisors, strategists, supporters and partners. Our employees deepen their knowledge of your products and services and identify completely with your ' +
                'vision. With us, you get customised, value-oriented solutions instead of one-size-fits-all solutions',
            subTitle: 'We believe in transparent processes and intensive customer relationships. ' +
                'This means we always find the ideal time for your offers.',
            img:aboutImg1,
            id:1
        },
        {
            title: "our philosophy",
            description: '"From the beginning, our agency has specialised in going beyond the standards of a classic call centre. Learn more about our journey." I\'m just writing this out and putting my personal story in.',
            subTitle: 'Who we are, what we do and how we got started.',
            img:aboutImg,
            id:2,
            reverse:true,
        },

    ]


    const servicesList = [
        {name:'B2B cold calling',link:'Qualified appointment of new customers, existing customer care and reactivation.',description:'We take care of the qualified appointment of new customers, existing customer care and reactivation. With us as your partner, you have more time to focus on your core tasks while we open up new business ' +
                'opportunities for you and strengthen the loyalty of your existing customers.'},
        {name:'Sales assistance',link:'Qualified appointment of new customers, existing customer care and reactivation.',description:'We take care of the qualified appointment of new customers, existing customer care and reactivation. With us as your partner, you have more time to focus on your core tasks while we open up new business ' +
                'opportunities for you and strengthen the loyalty of your existing customers.'},
        {name:'Social selling',link:'Qualified appointment of new customers, existing customer care and reactivation.',description:'We take care of the qualified appointment of new customers, existing customer care and reactivation. With us as your partner, you have more time to focus on your core tasks while we open up new business ' +
                'opportunities for you and strengthen the loyalty of your existing customers.'},
        {name:'Establishment of CRM processes',link:'Qualified appointment of new customers, existing customer care and reactivation.',description:'We take care of the qualified appointment of new customers, existing customer care and reactivation. With us as your partner, you have more time to focus on your core tasks while we open up new business ' +
                'opportunities for you and strengthen the loyalty of your existing customers.'},
        {name:'Creation of BI dashboards',link:'Qualified appointment of new customers, existing customer care and reactivation.',description:'We take care of the qualified appointment of new customers, existing customer care and reactivation. With us as your partner, you have more time to focus on your core tasks while we open up new business ' +
                'opportunities for you and strengthen the loyalty of your existing customers.'},
        {name:'Sales process consulting',link:'Qualified appointment of new customers, existing customer care and reactivation.',description:'We take care of the qualified appointment of new customers, existing customer care and reactivation. With us as your partner, you have more time to focus on your core tasks while we open up new business ' +
                'opportunities for you and strengthen the loyalty of your existing customers.'},
        {name:'Training of internal teams',link:'Qualified appointment of new customers, existing customer care and reactivation.',description:'We take care of the qualified appointment of new customers, existing customer care and reactivation. With us as your partner, you have more time to focus on your core tasks while we open up new business ' +
                'opportunities for you and strengthen the loyalty of your existing customers.'},
    ]
    return {blogList, blogSequence, rolesList,aboutUs,servicesList}

}

export default useInformation