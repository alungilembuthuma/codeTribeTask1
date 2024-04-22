const personalInfo = {
    name: 'Alungile',
    surname: 'Mbuthuma',
    bio: "I'm a young black women who believes she has a bright future in coding it has always been my dream to be a Software Engineer. I did online classes at freecodecamp and at Great Learning Academy and recieved certification.",
    education: [
      {
        institution: 'GREAT LEARNING ACADEMY',
        degree: 'CERTIFICATE IN HTML AND CSS',
        graduationDate: '2023'
      },
      {
        institution: 'Rossburgh High School',
        degree: 'High School Matric',
        graduationDate: '2021'
      }
    ],
    contact: {
      email: 'alungilembuthuma@example.com',
      phone: '0642988103',
      address: '80 Pardy Road, Isipingo Hills, Durban, 4133'
    }
  };
var form = document.getElementById('Contact-Me');
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById('contact-me-status');
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = 'Thanks for your submission Alungile!';
    form.reset()
  }).catch(error => {
    status.innerHTML = 'Oops! There was a problem submitting your form'
  });
}
form.addEventListener('submit', handleSubmit);