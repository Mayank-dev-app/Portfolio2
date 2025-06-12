document.getElementById("contact-form").addEventListener("submit", async function (e) {    
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const formData = {
    name:name,
    email: email,
    message: message,
  }
try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        if(response.ok){
          alert(data.message);
          form.reset();
        }
        else{
          alert("somthing is an errro - from server");
        }
  } catch (error) {
    console.log("It have some Error - Client Server");
  }

});

document.getElementById("scrollToTop").onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

const form =document.getElementById("contact-form");
