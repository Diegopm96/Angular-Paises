import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap,tap } from 'rxjs/operators';

import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [],
})
export class VerPaisComponent implements OnInit {

  pais !:Country;


  constructor(
    private activateRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    // this.activateRoute.params.subscribe(({ id }) => {
    //   console.log(id);

    //   this.paisService.getPaisCodigo(id)
    //   .subscribe(pais=>{
    //     console.log(pais)
    //   })

    // });

    // trabajando con RJXS
      this.activateRoute.params
      .pipe(
        switchMap(({id})=>this.paisService.getPaisCodigo(id)),
        tap(console.log)
        )
      .subscribe(pais=>this.pais= pais[0]);

        }
}
