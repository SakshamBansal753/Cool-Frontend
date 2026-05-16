import React from 'react'
import { openingHours, socials } from '../../constants'
import { useGSAP } from '@gsap/react'
import { SplitText} from 'gsap/all';
import gsap from 'gsap';
const Footer = () => {
    	useGSAP(() => {
		const titleSplit = SplitText.create('#contact h2', { type: 'words' });
		
		const timeline = gsap.timeline({
		 scrollTrigger: {
			trigger: '#contact',
			start: 'top center',
		 },
		 ease: "power1.inOut"
		})
	 
	 timeline
		.from(titleSplit.words, {
		 opacity: 0, yPercent: 100, stagger: 0.02
	 })
		.from('#contact h3, #contact p', {
			opacity: 0, yPercent: 100, stagger: 0.02
	 })
		.to('#f-right-leaf', {
		 y: '-50', duration: 1, ease: 'power1.inOut'
	 }).to('#f-left-leaf', {
		 y: '-50', duration: 1, ease: 'power1.inOut'
	 }, '<')
	})
  return (
    <footer id="contact">
        <img src="/images/footer-right-leaf.png" alt="right leaft" id="f-right-leaf"/>
         <img src="/images/footer-left-leaf.png" alt="left leaf" id="f-left-leaf"/>
         <div className='content'>
            <h2> Where to Find Us</h2>
            <div>
                <h3>Visit Our Bar</h3>
                <p>City Center, Near Income Tax Office, Kailash Vihar Colony, Gwalior - 474011.</p>
            </div>
            <div>
                <h3>Contact Us</h3>
                <p> (555) 987-6543</p>
                <p>hello@samocktail.com</p>
            </div>
            <div>
                <h3>Open EveryDay</h3>
                {openingHours.map((time)=>(
                    <p key={time.day}>
                        {time.day}:{time.time}
                    </p>
                ))}
            </div>
            <div>
                <h3>Socials</h3>
                <div className='flex-center gap-5'>
                    {socials.map((social)=>(
                        <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel='nopener noreferrer'
                        aria-label={social.name}
                        >
                            <img src={social.icon}/>
                        </a>
                    ))}
                </div>
            </div>
            <div className='drink-img'>
                <img src="/images/footer-drinks.png" alt="drinks"/>
            </div>
         </div>
    </footer>
  )
}

export default Footer