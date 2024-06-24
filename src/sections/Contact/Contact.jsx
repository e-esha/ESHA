import style from './ContactStyles.module.css';

function Contact() {
  return (
    <section id="contact" className={style.container}>
        <h1 className="sectionTitle">Contact</h1>
        <form action="">
            <div className='formGroup'>
                <label htmlFor="name" hidden>
                  Name
                </label>
                <input type="text" name='name' placeholder='Name'required id="name" />
            </div>

            <div className='formGroup'>
                <label htmlFor="email" hidden>
                  Email
                </label>
                <input type="text" name='email' placeholder='Email'required id="email" />
            </div>

            <div className='formGroup'>
                <label htmlFor="message" hidden>
                  Message
                </label>
                <textarea name='message' placeholder='Message'required id="message"></textarea>
            </div>

            <input className='hover btn' type="submit"  value='Submit'/>
        </form>
    </section>
  )
}

export default Contact;