import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Injectable()

export class AuthService {

  userData:any;

  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private router: Router,
  )
  {
    this.afAuth.authState.subscribe(user=>{
      if(user){
        this.userData=user;
        localStorage.setItem('user',JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!)
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!)
      }
    })
  }

  setUserData(user:any){
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      'user/${user.uid}'
    );
    const userData: User = {
      id: user.id,
      nome: user.nome,
      email: user.email,
      senha: user.senha,
      emailVerified: user.emailVerified
    };
    return userRef.set(userData, {
      merge:true
    });
  }

  login(email:string, password:string){
    return this.afAuth.signInWithEmailAndPassword(email, password)
    .then(result=>{
      this.setUserData(result.user);
      this.afAuth.authState.subscribe(user=>{
        if (user) {
          this.router.navigate(['/clinica']);
        }
      })
    }).catch(()=>{
      alert('Formulário Inválido!');
    })
  }

  register(email:string, password:string){
    return this.afAuth.createUserWithEmailAndPassword(email, password)
    .then(result=>{
      result.user?.sendEmailVerification();
      this.setUserData(result.user);
      alert('Formulário Válido!');
    }).catch(()=>{
      alert('Formulário Inválido!');
    })
  }
}
