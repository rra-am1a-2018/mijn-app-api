import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  // Dit is een javascript-object
  private cardContent = { subtitle: 'Donald Duck',
                          title   : 'Zwarte Magica',
                          image   : './assets/images/zwarte-magica.png',
                          content : 'Zij wil altijd het geluksdubbeltje van Dagobert Duck stelen. Dit is niet correct...'};

  private cardContent01 = { subtitle: 'Donald Duck',
                          title   : 'Zware Jongens',
                          image   : './assets/images/zware-jongens.gif',
                          content : 'Zij willen altijd de kluis van Dagobert Duck stelen.'};


}
