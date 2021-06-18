// window.addEventListener("DOMContentLoaded"), function () {

//   var form = document.getElementById("my-form");
//   var status = document.getElementById("status");

//   // Success and Error function for after the form is submisted

//   function success() {
//     form.reset();
//     status.classList.add('success');
//     status.innerHTML = "Thanks!";
//   }

//   function error() {
//     status.classList.add('error');
//     status.innerHTML = "Oops! Theres was a problem";
//   }

//   // handle the form submission event

//   form.addEventListener("submit", function (ev) {
//     ev.preventDefault();
//     var data = new FormData(form);
//     ajax(form.method, form.action, data, success, error);
//   });
// };


//   function ajax(method, url, data, success, error) {
//     var xhr = new XMLHttpRequest();
//     xhr.open(method, url);
//     xhr.setRequestHeader("Accept", "application/json");
//     xhr.onreadystatechange = function () {
//       if (xhr.readyState !== XMLHttpRequest.DONE) return;
//       if (xhr.status === 200) {
//         success(xhr.response, xhr.responseType);
//       } else {
//         error(xhr.status, xhr.response, xhr.responseType);
//       }
//     };
//     xhr.send(data);
//   }





var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }

      }).then(response => {
        status.innerHTML = "Thanks for your submission!";
        form.reset()
        status.classList.add('success');
      }).catch(error => {
        status.classList.add('error');
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)