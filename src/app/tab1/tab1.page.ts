import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  private cardContent = [
                          {
                            subtitle: 'Donald Duck',
                            title   : 'Zwarte Magica',
                            image   : './assets/images/zwarte-magica.png',
                            content : 'Zij wil altijd het geluksdubbeltje van Dagobert Duck stelen. Dit is niet correct...'
                          },
                          {
                            subtitle: 'Donald Duck',
                            title   : 'Zware Jongens',
                            image   : './assets/images/zware-jongens.gif',
                            content : 'Zij willen altijd de kluis van Dagobert Duck stelen.'
                          },
                          {
                            subtitle: 'Donald Duck',
                            title: 'Kwik Kwek Kwak',
                            image: './assets/images/kwikkwekkwak.png',
                            content: 'Kwik kwek en kwak zijn de neefjes van Donald Duck en zijn altijd in voor avontuur.'
                          },
                          {
                            subtitle: 'Donald Duck',
                            title: 'Guus Geluk',
                            image: './assets/images/guus-geluk.png',
                            content: 'Guus Geluk is de geluksoom van Donald Duck.'
                          }
                        ];
}
