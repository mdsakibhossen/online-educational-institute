// Start Nav-Button(Sidebar Button/Menu-Button)
const menu_btn = document.querySelector('#menu_btn');

// Run On Nav-Button Click 
function menu_run() {
    const bar = document.querySelectorAll('.bar')
    const bar1 = bar[0];
    const bar2 = bar[1];
    const bar3 = bar[2];

    // Nav-Button Styling
    bar1.classList.toggle("bar1");
    bar2.classList.toggle("bar2");
    bar3.classList.toggle("bar3");
};
// End Nav-Button(Sidebar Button/Menu-Button)


// Contact Section Start
//Email Field Validation
// Run on Input in Email Field 
function email_fun() {
    let email_msg = document.querySelector(".email_error");
    let regexp_email = /^[a-zA-Z_\.\-]([0-9a-zA-Z_\.\-]){1,30}@([a-zA-Z]){3,10}\.([a-zA-Z]){2,4}$/;
    if (regexp_email.test(email.value.trim())) {
        email_msg.innerHTML = "";
        email.classList.remove("is-invalid");
        email.classList.add("is-valid");
        email_msg.classList.remove("invalid-feedback");
    } else {
        email_msg.innerHTML = "Enter Your Valied Email";
        email.classList.remove("is-valid");
        email.classList.add("is-invalid");
        email_msg.classList.add("invalid-feedback");

        return false;
    }
};



const send_btn = document.getElementById('send_btn');
const msg = document.getElementById('msg');
//Message Field Validation
function msg_fun() {
    console.log(msg.value)
    let msg_error = document.querySelector(".msg_error");
    if (msg.value == '') {
        msg.classList.add("is-invalid");
        msg_error.classList.add("invalid-feedback");
        msg_error.innerHTML = "Please Write Your Message";
        return false

    }
};


send_btn.addEventListener('click', () => {
    email_fun();
    msg_fun();
});

// Contact Section End



// Counter Start

const achivementSec = document.getElementById('our_achievement');
const sectionObserver = new IntersectionObserver((entries, observer) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
        const counters = document.querySelectorAll('.counter');

        counters.forEach(counter => {
            const startCounting = () => {
                const startingNum = parseInt(counter.innerText);
                const endingNum = parseInt(counter.dataset.number);
                const incrementNum = Math.trunc(endingNum / 100);

                if (startingNum < endingNum) {
                    counter.innerText = startingNum + incrementNum + '+';
                    setTimeout(startCounting, 20)
                }
            }

            startCounting();

        });
        observer.unobserve(achivementSec)
    

}, {
    root: null,
    threshold: 0
});
sectionObserver.observe(achivementSec)
// Counter End 