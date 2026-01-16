var application = new Vue({
    el: '#mainarea',
    data: {
      webDev: true,
      graphicDesign: false,
      viewingLarge: false,
      viewingVideo: false,
      imageUrl: '',
      videoUrl: '',
      caption: '',
      bookCover: {
        1: ['pics/books/jamesbond.png','College assignment (2015).'],
        2: ['pics/books/iamlegend.png','College assignment (2015).'],
        3: ['pics/books/ceremony.png','Commissioned by a friend (2015).']
      },
      moviePoster: {
        1: ['pics/movie/jumper.jpg','College assignment (2015).'],
        2: ['pics/movie/seven.jpg','College assignment (2015).'],
        3: ['pics/movie/seven2.jpg','College assignment (2015).']
      },
      typoPoster: {
        1: ['pics/typography/creative.jpg','College assignment (2015).'],
        2: ['pics/typography/robert.jpg','College assignment (2015).'],
        3: ['pics/typography/sins.png','College assignment (2015).'],
        4: ['pics/typography/willsmith.jpg','College assignment (2015).']
      },
      infoGraphic: {
        1: ['pics/infographics/advertising.jpg','College assignment (2015).'],
        2: ['pics/infographics/copyright.jpg','College assignment (2015).'],
        3: ['pics/infographics/london.jpg','Commissioned by a company called BI Capital (2016).'],
        4: ['pics/infographics/taxes.png','College assignment (2015).']
      },
      printDesign: {
        1: ['pics/print/mintel.jpg','Commissioned by a company called Mintel (2016).'],
        2: ['pics/print/sanatore.png','Commissioned by a home health care agency called Sanatore (2018).'],
        3: ['pics/print/sf2.jpg','Commissioned by a cleaning company called S2F Cleaning Services (2016).'],
        4: ['pics/print/manucore.jpg','Commissioned by a company called Accucore (2016).'],
        5: ['pics/print/smartcities.jpg','A magazine cover I designed for a company I was working for called Amnick Social Enterprise (2016).'],
        6: ['pics/print/Android.png','College assignment (2015).'],
        7: ['pics/print/attendance.jpg','College assignment (2015).']
        },
      miscItem: {
        1: ['pics/misc/burgerking.jpg','College assignment (2016).'],
        2: ['pics/misc/dollars.jpg','Comissioned by Arklu Ltd (2015).'],
        3: ['pics/misc/goodandevil.jpg','College assignment (2016).'],
        4: ['pics/misc/jewelcases.png','College assignment (2016).'],
        5: ['pics/misc/zombie101.jpg','College assignment (2016).'],
        6: ['pics/misc/gamergoal.png','Advertising materials I created for my social media website GamerGoal (2018).']
      },
      logos: {
        1: ['pics/logos/church.jpg','4 versions of a logo that was commissioned by a church called Genesis CLF (2015).'],
        2: ['pics/logos/dog.jpg','2 versions of a logo commissioned by a company called TheDogWashLady (2015). The bottom logo was chosen as the official design.'],
        3: ['pics/logos/kingky.png','Commissioned by a company called Kingky (2017). The sketch on top was sent to me by the company, and I converted it into the official logo on the bottom.'],
        4: ['pics/logos/thinkmedia1.png','College assignment (2015).'],
        5: ['pics/logos/unknown.jpg','4 versions of a logo comissioned by a company called Alt Writers (2015). The symbol is a nsibidi character that translates to "Welcome". The top right logo was chosen as the official design.']
        },
      myVideo: {
        1: ['vids/Android.mp4','College assignment (2015).'],
        2: ['vids/VICE.mp4','College assignment (2015).'],
        3: ['vids/Paintings.mp4','A video I created for a company I was working for called Autumn Breeze Productions (2017).'],
        4: ['vids/Actors.mp4','A video I created for a company I was working for called Autumn Breeze Productions (2017).'],
        5: ['vids/Tech.mp4','A video I created for a company I was working for called Autumn Breeze Productions (2017).'],
        6: ['vids/Knockout.mp4','In 2012 I created my own fighting game using Fighter Factory Studio. The visuals are comprised of hundreds of sprites that I made from scratch using MSPaint. Download the game for Windows at https://knockoutgame.yolasite.com']
      }
    },
    methods: {
        viewBook:function(book) {
            this.imageUrl = this.bookCover[book][0];
            this.caption = this.bookCover[book][1];
            this.viewingLarge = true;
        },
        viewVideo:function(video) {
            this.videoUrl = this.myVideo[video][0];
            this.caption = this.myVideo[video][1];
            this.viewingLarge = true;
            this.viewingVideo = true;
        },
        viewMoviePoster:function(poster) {
            this.imageUrl = this.moviePoster[poster][0];
            this.caption = this.moviePoster[poster][1];
            this.viewingLarge = true;
        },
        viewMisc:function(item) {
            this.imageUrl = this.miscItem[item][0];
            this.caption = this.miscItem[item][1];
            this.viewingLarge = true;
        },
        viewTypoPoster:function(poster) {
            this.imageUrl = this.typoPoster[poster][0];
            this.caption = this.typoPoster[poster][1];
            this.viewingLarge = true;
        },
        viewPrintDesign:function(design) {
            this.imageUrl = this.printDesign[design][0];
            this.caption = this.printDesign[design][1];
            this.viewingLarge = true;
        },
        viewLogo:function(logo) {
            this.imageUrl = this.logos[logo][0];
            this.caption = this.logos[logo][1];
            this.viewingLarge = true;
        },
        viewInfoGraphic:function(graphic) {
            this.imageUrl = this.infoGraphic[graphic][0];
            this.caption = this.infoGraphic[graphic][1];
            this.viewingLarge = true;
        },
        close:function() {
            this.viewingLarge = false;
            this.viewingVideo = false;
            this.imageUrl = '';
            this.videoUrl = '';
        },
        switchProfession:function(profession) {
            if (profession == 'graphicdesign') {
            this.webDev = false;
            this.graphicDesign = true;
            } else if (profession == 'webdev') {
            this.graphicDesign = false;
            this.webDev = true;
            }
        },
    },

    created: function(){
      const url = new URL(window.location.href);
      if (url.searchParams.has('graphic_design')) {
          this.graphicDesign = true;
          this.webDev = false;
      }
    }

});
