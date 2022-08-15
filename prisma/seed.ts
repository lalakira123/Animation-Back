import { prisma } from './../src/config/db.js';

async function main(){
  await prisma.$queryRaw`
    INSERT INTO categories (name) VALUES ('Ação');
    INSERT INTO categories (name) VALUES ('Aventura');
    INSERT INTO categories (name) VALUES ('Mistério');

INSERT INTO series (name, description, "imageUrl", "bigImageUrl", "bannerUrl")
VALUES ('Jujutsu Kaisen', 
        'Para controlar o demônio, bem como atrasar sua execução final, Itadori deve ficar mais forte como 
        um usuário de maldição.', 
       'https://img1.ak.crunchyroll.com/i/spire3/02c909684baa37d6ef70a9df742d58951610752067_full.jpg',
       'https://img1.ak.crunchyroll.com/i/spire2/945aa523c5e30d33653fca83dbd6e27e1600049449_main.png',
       'https://ovicio.com.br/wp-content/uploads/2020/08/20200819-the-jujutsu-kaisen-anime-is-heading-to-crunchyroll-this-october.png');

INSERT INTO series (name, description, "imageUrl", "bigImageUrl", "bannerUrl")
VALUES ('Demon Slayer', 
        'Demônios massacraram sua família e amaldiçoaram sua irmã. 
        Agora Tanjiro inicia sua jornada para encontrar a cura e se vingar.', 
       'https://img1.ak.crunchyroll.com/i/spire3/f1fe5c7a43cb2f38f4152a58f89479821633360806_main.png',
       'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/f7adcedd1d7c53ae18d851003a3cfae4.jpeg',
       'https://www.omegascopio.com.br/wp-content/uploads/2021/10/Kimetsu_no_Yaiba.jpg');

INSERT INTO series (name, description, "imageUrl", "bigImageUrl", "bannerUrl")
VALUES ('Castlevania', 
        'Um caçador de vampiros luta para salvar uma cidade sitiada por um exército de criaturas controladas pelo próprio Drácula. 
        Inspirado no clássico videogame.', 
       'https://br.web.img2.acsta.net/pictures/21/05/10/23/27/0599462.jpg',
       'https://c4.wallpaperflare.com/wallpaper/212/95/712/castlevania-alucard-castlevania-sypha-belnades-trevor-belmont-wallpaper-preview.jpg',
       'https://images7.alphacoders.com/116/1161710.jpg');

INSERT INTO series (name, description, "imageUrl", "bigImageUrl", "bannerUrl")
VALUES ('Attack On Titan', 
        'Por medo dos titãs, gigantes cruéis devoradores de pessoas, a humanidade vive atrás de muros.', 
       'https://m.media-amazon.com/images/M/MV5BNzc5MTczNDQtNDFjNi00ZDU5LWFkNzItOTE1NzQzMzdhNzMxXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg',
       'https://occ.a.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABehaebGYDhkcchPKKroqtMxyowScYsVu4KUiGdSTAF55pvtbi35WxPMej79WQVTTR-j6DexHd1JfoiPMKjQegc-_Epp2wl-C65Z1.jpg?r=d19',
       'https://sm.ign.com/ign_br/screenshot/default/attack-on-titan-featured-image-cropped_h3mq.jpg');

INSERT INTO series (name, description, "imageUrl", "bigImageUrl", "bannerUrl")
VALUES ('Dragon Ball Z', 
        'Goku foi enviado ainda bebê para a Terra com o intuito de conquistá-la.', 
       'https://img1.ak.crunchyroll.com/i/spire2/ab001b1cb053ec0d7b1b47b0f7bf98e71647329181_main.jpg',
       'https://www.awn.com/sites/default/files/styles/original/public/image/attached/1056766-dbz16x9-1280.jpg?itok=bkEOK5ly',
       'https://www.justwatch.com/images/backdrop/185246141/s640/dragon-ball-z');

INSERT INTO series (name, description, "imageUrl", "bigImageUrl", "bannerUrl")
VALUES ('Fullmetal Alchemist', 
        'Os irmão Edward e Alphonso Elric desafiaram leis quando resolveram fazer uma transmutação humana para trazer sua mãe de volta à vida.', 
       'https://cdn.myanimelist.net/images/about_me/ranking_items/4757216-b784bd05-0853-439c-b4e4-27ec46ee4c53.jpg?t=1655669475',
       'https://1.bp.blogspot.com/-TWEINGb3JQA/WAYMLQLooaI/AAAAAAAAkow/KwpOaXgOXvgYxs-JjOqja68P1_lWS_m4QCLcB/s1600/fullmetal-alchemist-netflix-banner.jpg',
       'https://www.comboinfinito.com.br/principal/wp-content/uploads/2017/02/fullmetal-alchemist-primeira-imagem-de-alphonse.jpg');

INSERT INTO series (name, description, "imageUrl", "bigImageUrl", "bannerUrl")
VALUES ('One Piece', 
        'O capitão Luffy navega com sua tripulação à procura de um tesouro que pode torná-lo o novo rei dos piratas.', 
       'https://img1.ak.crunchyroll.com/i/spire4/8056a82e973dde98ebb82abd39dc69731564519729_full.jpg',
       'https://www.opovo.com.br/_midias/jpg/2021/12/10/818x460/1_one_piece___1000_episodios-17673799.jpg',
       'https://www.opovo.com.br/_midias/jpg/2022/06/08/818x460/1_one_piece_manga-18932483.jpeg');

INSERT INTO series (name, description, "imageUrl", "bigImageUrl", "bannerUrl")
VALUES ('Parasyte', 
        'Vermes alienígenas invadem a terra para controlar os corpos dos seres humanos.', 
       'https://img1.ak.crunchyroll.com/i/spire2/7d31dfaf49397a8cc1e490ccedea04e21422401583_main.jpg',
       'https://occ-0-2144-3852.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcizu4nJsjhyUMNEehrTHhTGKtsOW3o3Hv9zBSrfaHCCugE6xtEtAOc5_ZYBoGZDqJWEpvlnGPa97DbnwTQ3zFKJR3Gm.jpg?r=26c',
       'https://vigilianerd.com.br/wp-content/uploads/2020/08/parasyte-capa-netflix-vigilia-nerd.jpg');

INSERT INTO series (name, description, "imageUrl", "bigImageUrl", "bannerUrl")
VALUES ('Steins Gate', 
        'Grupo de amigos que personalizaram seus microondas num dispositivo que pode enviar mensagens de texto para o passado. ', 
       'https://img1.ak.crunchyroll.com/i/spire2/ff06631478e5344b467111c7aa85ff881302201468_full.jpg',
       'https://www.animeunited.com.br/oomtumtu/2020/10/1_gnXIaTP_E-PXr1EbaMudyQ.jpeg',
       'https://sucodemanga.com.br/wp-content/uploads/2018/04/steins-gate-thumb.jpg');

INSERT INTO "categoriesSeries" ("categoryId", "serieId") VALUES (1,1);
INSERT INTO "categoriesSeries" ("categoryId", "serieId") VALUES (1,2);
INSERT INTO "categoriesSeries" ("categoryId", "serieId") VALUES (1,3);
INSERT INTO "categoriesSeries" ("categoryId", "serieId") VALUES (1,4);
INSERT INTO "categoriesSeries" ("categoryId", "serieId") VALUES (1,5);
INSERT INTO "categoriesSeries" ("categoryId", "serieId") VALUES (1,6);
INSERT INTO "categoriesSeries" ("categoryId", "serieId") VALUES (1,7);
INSERT INTO "categoriesSeries" ("categoryId", "serieId") VALUES (1,8);
INSERT INTO "categoriesSeries" ("categoryId", "serieId") VALUES (2,2);
INSERT INTO "categoriesSeries" ("categoryId", "serieId") VALUES (2,5);
INSERT INTO "categoriesSeries" ("categoryId", "serieId") VALUES (2,6);
INSERT INTO "categoriesSeries" ("categoryId", "serieId") VALUES (2,7);
INSERT INTO "categoriesSeries" ("categoryId", "serieId") VALUES (3,3);
INSERT INTO "categoriesSeries" ("categoryId", "serieId") VALUES (3,4);
INSERT INTO "categoriesSeries" ("categoryId", "serieId") VALUES (3,9);

INSERT INTO seasons (number, "serieId") VALUES (1,1);
INSERT INTO seasons (number, "serieId") VALUES (1,2);
INSERT INTO seasons (number, "serieId") VALUES (1,3);
INSERT INTO seasons (number, "serieId") VALUES (1,4);
INSERT INTO seasons (number, "serieId") VALUES (1,5);
INSERT INTO seasons (number, "serieId") VALUES (1,6);
INSERT INTO seasons (number, "serieId") VALUES (4,7);
INSERT INTO seasons (number, "serieId") VALUES (1,8);
INSERT INTO seasons (number, "serieId") VALUES (1,9);

INSERT INTO episodes (number, "seasonId", views, name) 
VALUES (1, 1, 0, 'Ryomen Sukuna');
INSERT INTO episodes (number, "seasonId", views, name) 
VALUES (2, 1, 0, 'Por mim mesmo');
INSERT INTO episodes (number, "seasonId", views, name) 
VALUES (3, 1, 0, 'Garota de Aço');

INSERT INTO episodes (number, "seasonId", views, name) 
VALUES (1, 2, 0, 'Crueldade');
INSERT INTO episodes (number, "seasonId", views, name) 
VALUES (2, 2, 0, 'Sakonji Urokodaki, o treinador');

INSERT INTO episodes (number, "seasonId", views, name) 
VALUES (1, 3, 0, 'Garrafa de bruxa');
INSERT INTO episodes (number, "seasonId", views, name) 
VALUES (2, 3, 0, 'Necrópolis');
INSERT INTO episodes (number, "seasonId", views, name) 
VALUES (3, 3, 0, 'Labirinto');

INSERT INTO episodes (number, "seasonId", views, name) 
VALUES (1, 4, 0, 'Para Você, 2000 Anos no Futuro - A Queda de Shiganshina, Parte 1');
INSERT INTO episodes (number, "seasonId", views, name) 
VALUES (2, 4, 0, 'Aquele Dia - A Queda de Shiganshina, Parte 2');
INSERT INTO episodes (number, "seasonId", views, name) 
VALUES (3, 4, 0, 'Uma Luz Tênue em Meio ao Desespero - A Humanidade Revida, Parte 1');

INSERT INTO episodes (number, "seasonId", views, name) 
VALUES (1, 5, 0, 'Mini Goku é um Menino Superprotegido! Eu Sou Gohan.');
INSERT INTO episodes (number, "seasonId", views, name) 
VALUES (2, 5, 0, 'O Guerreiro Mais Forte da História É Irmão Mais Velho de Goku!');
INSERT INTO episodes (number, "seasonId", views, name) 
VALUES (3, 5, 0, 'Isso aí! Esta é a Combinação Mais Forte do Mundo!');

INSERT INTO episodes (number, "seasonId", views, name) 
VALUES (1, 6, 0, 'Aqueles que desafiam o sol');
INSERT INTO episodes (number, "seasonId", views, name) 
VALUES (2, 6, 0, 'Corpos condenados');
INSERT INTO episodes (number, "seasonId", views, name) 
VALUES (3, 6, 0, 'Mãe...');

INSERT INTO episodes (number, "seasonId", views, name) 
VALUES (93, 7, 0, 'Chegando no País do Deserto! O Pó-Que-Faz-Chover e o Exército Rebelde');
INSERT INTO episodes (number, "seasonId", views, name) 
VALUES (94, 7, 0, 'O Reencontro dos Poderosos! Seu Nome é Ace dos Punhos de Fogo');
INSERT INTO episodes (number, "seasonId", views, name) 
VALUES (95, 7, 0, 'Ace e Luffy! Calorosas Lembranças e Laços de Irmandade');

INSERT INTO episodes (number, "seasonId", views, name) 
VALUES (1, 8, 0, 'The Metamorphosis');
INSERT INTO episodes (number, "seasonId", views, name) 
VALUES (2, 8, 0, 'The Devil in the Flesh');
INSERT INTO episodes (number, "seasonId", views, name) 
VALUES (3, 8, 0, 'Symposium');

INSERT INTO episodes (number, "seasonId", views, name) 
VALUES (1, 9, 0, 'Momento Decisivo');
`;
}

main().catch(e => {
  console.log(e);
  process.exit(1);
}).finally(async () => {
    await prisma.$disconnect();
});