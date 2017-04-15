import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class TodosService {
   constructor(private _http:Http){
        
    }
    
    getTodos(){
        return this._http.get('/api/todos')
            .map(res => res.json());
    }
    
    saveTodo(todo){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post('/api/todo', JSON.stringify(todo), {headers: headers})
            .map(res => res.json());
    }
    
    updateTodo(todo){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.put('/api/todo/'+todo._id, JSON.stringify(todo), {headers: headers})
            .map(res => res.json());
    }
    
    deleteTodo(id){
        return this._http.delete('/api/todo/'+id)
            .map(res => res.json());
    }

}
