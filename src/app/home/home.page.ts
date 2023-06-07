import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
// Agrega más avatares según sea necesario
  avatares = [
    { nombre: 'Mandarina', url: 'https://editorialtelevisa.brightspotcdn.com/dims4/default/ee68da7/2147483647/strip/true/crop/1194x672+3+0/resize/1000x563!/quality/90/?url=https%3A%2F%2Fk2-prod-editorial-televisa.s3.amazonaws.com%2Fbrightspot%2Fwp-content%2Fuploads%2F2022%2F08%2Ftren-bala-reparto-aaron-taylor-johnson.jpg' },
    { nombre: 'El Lobo', url: 'https://www.eluniverso.com/resizer/AiEWeyq7dRbX6HdNk2ejqknAOh0=/arc-anglerfish-arc2-prod-eluniverso/public/FTDIDXAZWFEPBM6WGPVLKDTRYE.jpg' },
    { nombre: 'El Diablo', url: 'https://st1.uvnimg.com/9c/49/55ffc792447a8fa147fd7a2f23e7/michael-shannon-en-bullet-train.jpg' },
  ];
    cards = [
      { nombre: 'Rapidos Y furiosos', url: 'https://www.infobae.com/new-resizer/hkly2fHqFBYaSUsJS8asxR_2GX0=/1200x900/filters:format(webp):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/7XMYKT2MPBFE5JTRNV4LB34JLI.png', descripcion:'asdasdadsasddasasdadsadsads' },
      { nombre: 'Spiderman', url: 'https://www.dondeir.com/wp-content/uploads/2021/07/spider-man-no-way-home-todo-lo-que-necesitas-saber.jpg', descripcion:'asdasdadsasddasasdadsadsadsasdadsasdasddasasdadsdas' },


  ];
}
