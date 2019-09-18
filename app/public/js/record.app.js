var patientRecordApp = new Vue({
  el: '#patientRecordApp',
  data: {
    patients: [],
    formPatient: {
      firstName:'',
      lastName:'',
      dob:'',
      sexAtBirth:''
    }
  },

    selectRecord(patient)

  methods: {
    fetchPatients() {
      fetch('dummy.php')
      .then(response => response.json())
      .then(json => { patientRecordApp.patients = json });
    }
  },

  handleCreateRecord(event) {
        //TODO: POSET the form contents somewhere
        //fetch(url)
        //.then(...)
        this.patients.push(this.formPatient);
        this.formPatient: {
          firstName:'',
          lastName:'',
          dob:'',
          sexAtBirth:''
      }


  created() {
    this.fetchPatients();
  }
}
);
