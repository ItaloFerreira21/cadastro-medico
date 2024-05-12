import { Doctor } from "./Doctor";
import { Patient } from "./Patient";

export class Consultation {
  //props
  id: number;
  doctor: Doctor;
  patient: Patient;
  date: Date;

  //contructor
  constructor(id: number, doctor: Doctor, patient: Patient, date: Date) {
    this.id = id;
    this.doctor = doctor;
    this.patient = patient;
    this.date = date;
  }

  //methods
}
