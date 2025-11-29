# choice of conjugation for "aimer"

1. modify the backend (server) to add an endpoint called "aimer"
2. this endpoint returns an object that looks like this
{ "verbe":"aimer",
  "present":["j'aime", "tu aimes", "elle aime", "nous aimons", "vous aimez", "elles aiment"],
  "imparfait":["j'aimais", "tu aimais", "elle aimait", "nous aimions", "vous aimiez", "elles aimaient"]
}
3. in the frontend, add a select/option to choose the verb (only one option, "aimer", preselected)
4. in the frontend, add a select/option to choose the tense ("present", "imparfait", preselected)
5. in the frontend, add a select/option to choose the pronoun (6 option, "elle", preselected)
6. add events so that selecting a verb calls the correct verb backend, and updates the answer object
7. add events so that selecting a tense updates the field that we read from the answer object
8. add events so that selecting a pronoun updates the index that we read from the answer object
