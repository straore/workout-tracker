import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkoutsApiService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  /**
   * get a given workout
   */
  getWorkouts(){
    return this.http.get<any[]>(`${this.baseUrl}/workouts`);
  }

   /**
   * get a given workout
   */
  getWorkout(id){
    return this.http.get<any[]>(`${this.baseUrl}/workouts/${id}`);
  }

  /**
   * create a new workout
   */
  addWorkout(workout: any){
    return this.http.post(`${this.baseUrl}/workouts`,workout);
  }
   /**
   * update a workout
   */
  updateWorkout(workout: any) {
    return this.http.put(`${this.baseUrl}/workouts/${workout.id}`, workout);
  }

  /**
   * @param workout 
   */
  saveWorkout(workout: any) {
    if (workout.id) {
      return this.updateWorkout(workout);
    } else {
      return this.addWorkout(workout);
    }
  }

   /**
   * update a workout
   */
  deleteWorkout(id) {
    return this.http.delete(`${this.baseUrl}/workouts/${id}`);
  }
}
