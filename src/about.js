import './style.css';

function aboutFunction() {
  const aboutUs = document.createElement('div');
  aboutUs.setAttribute('class', 'about');

  const description1 = document.createElement('p');
  description1.innerHTML =
    'We appreciate this opportunity to introduce ourselves. It is always our intention to make new acquaintances and foster new business relationships with the intention of them becoming a long-lasting partnership.<strong> Please consider us for any future projects; we are happy to estimate, bid and build out your next project.</strong>';
  aboutUs.appendChild(description1);

  const description2 = document.createElement('p');
  description2.innerHTML =
    "Bojan Vlajic, founder of iFish Construction is a construction industry veteran with over 23 years of experience on the field. During his tenure, he spent the majority of his career at the helm of Elmhardt Construction, starting off as a Carpenter Foreman and making his way up to Executive Project Manager at the height of the company’s success. Elmhardt Construction Corp. was formed as a non-union subcontractor in 1993 specializing in retail fit-outs, apartment buildings, hospitality, and medical and commercial office space. During his time at Elmhardt, some of Bojan’s most notable projects were Smyth Tribeca, Little Red School House, Pace University, Bottega Venetta New York Flagship, Calvin Kelin 5th Avenue, Arc'teryx, Steve Madden, NYU Lagone 84th Street, Shake Shacks (various locations), Bryant & Cooper Steak House, Webster Hall, FMC Medical Center, Tesla Service Center, and many more. Furthermore, Elmhardt Construction completed several private medical facilities where clean-rooms, MRI and X-ray rooms have been part of the scope and involved phased sequences and critical guidelines.";
  aboutUs.appendChild(description2);

  const description3 = document.createElement('p');
  description3.innerHTML =
    'Unfortunately, Elmhardt’s dynasty came to an end when its founder, Tom Bernhardt, passed away. With this, the business closed shop. Given all his extensive industry experience and wanting to continue Tom Bernhardt’s legacy, Bojan started his own firm. IFish Construction LLC was formed. Bojan combined his passion for fishing and construction and created the cheeky moniker.   ';
  aboutUs.appendChild(description3);

  const description4 = document.createElement('p');
  description4.innerHTML =
    'IFish Construction LLC specializes in interior layouts for metal stud framing, drywall and taping, and acoustical ceilings including architectural specialties, and exterior steel stud framing for mansards including standing seam panel work. We provide quality deliverables within timely deadlines.';
  aboutUs.appendChild(description4);

  const description5 = document.createElement('p');
  description5.innerHTML =
    'IFish Construction is proud of its solid safety record. All field employees have completed the following courses: 10-Hour OSHA Safety Course, 2-Hour OSHA Asbestos Awareness Course, 4-Hour Scaffold Safety Course, 2-Hour OSHA Scissor Lift Safety Course, 2-Hour OSHA Fall Prevention Course. Our supervisor and foreman has completed the 30-Hour OSHA Safety Certifications.';
  aboutUs.appendChild(description5);

  const description6 = document.createElement('p');
  description6.innerHTML =
    'We are a small business capable of big work always looking to expand our diverse base of clients. ';
  aboutUs.appendChild(description6);

  const description7 = document.createElement('p');
  description7.innerHTML =
    'We look forward to hearing from you and thank you for your time.       ';
  aboutUs.appendChild(description7);

  return aboutUs;
}

export { aboutFunction };
