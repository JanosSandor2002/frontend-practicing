import React from 'react';

const Result = ({ selectedLetter }) => {
  const letterToMentor = {
    g: 'Gáspár Laci',
    a: 'Tóth Andi',
    l: 'Herceg Erika',
    e: 'ByeAlex',
    m: 'Majka',
    v: 'Valkusz Milán',
    t: 'Tóth Gabi',
  };

  const details = (letter) => {
    switch (letter) {
      case 't':
        return (
          <p>
            You are a dynamic and resilient individual who has navigated the
            complexities of public life with grace and authenticity. Your
            journey from a reality TV contestant to a respected artist showcases
            your adaptability and determination. Embracing both the highs and
            lows of your career, you have remained true to yourself, using your
            platform to inspire others. Your candidness and openness about
            personal challenges resonate with many, making you a relatable
            figure in the entertainment industry. With a strong sense of self
            and a commitment to personal growth, you continue to evolve, both
            artistically and personally. Your story is one of perseverance,
            self-discovery, and empowerment, encouraging others to embrace their
            own paths with confidence. Your influence extends beyond music, as
            you advocate for authenticity and self-expression in all aspects of
            life. Through your experiences, you demonstrate that success is not
            just about fame, but about staying true to one's values and
            inspiring others along the way. Your legacy is built on resilience,
            authenticity, and the courage to be unapologetically yourself.
          </p>
        );
      case 'g':
        return (
          <p>
            You are a charismatic and confident individual who thrives in the
            spotlight. Your presence commands attention, and you have a natural
            ability to lead and inspire others. With a strong sense of self and
            a passion for music, you exude a magnetic energy that draws people
            in. Your journey from humble beginnings to becoming a household name
            reflects your determination and resilience. You value authenticity
            and are not afraid to express your true self. Your style is bold,
            and you embrace challenges head-on, always striving for excellence
            in everything you do. You have a strong stage presence and captivate
            audiences effortlessly. Your creativity and passion make you a
            natural role model for others. You are driven by ambition and
            continually seek to grow personally and professionally. Your
            influence inspires those around you to pursue their dreams
            fearlessly.
          </p>
        );
      case 'a':
        return (
          <p>
            You possess a warm and nurturing spirit, always putting others'
            needs before your own. Your empathetic nature allows you to connect
            deeply with those around you, offering support and encouragement.
            With a gentle demeanor and a heart full of compassion, you create an
            environment where people feel safe and valued. Your dedication to
            helping others grow and succeed is evident in your actions, and you
            take pride in being a source of strength for those who need it most.
            You are approachable and understanding, making others feel
            comfortable in your presence. Your kindness and patience define your
            personal and professional relationships. You encourage collaboration
            and harmony in every situation. Your intuition and emotional
            intelligence guide you in making thoughtful decisions. You inspire
            others with your unwavering support and care. People naturally trust
            and confide in you because of your empathetic nature.
          </p>
        );
      case 'l':
        return (
          <p>
            You are a creative and expressive individual with a flair for the
            dramatic. Your artistic talents shine through in everything you do,
            and you approach life with curiosity and adventure. Whether through
            music, dance, or performance, you captivate audiences with your
            passion and energy. Your ability to transform ordinary moments into
            extraordinary experiences is a testament to your imaginative spirit.
            You embrace change and are always seeking new ways to express your
            unique perspective. You are confident in showcasing your
            individuality and originality. Your creativity inspires others to
            explore their own talents and passions. You enjoy experimenting with
            ideas and pushing artistic boundaries. Your enthusiasm and
            expressive nature make you unforgettable to those around you. You
            have a natural talent for storytelling and evoking emotions through
            your art.
          </p>
        );
      case 'e':
        return (
          <p>
            You are a thoughtful and introspective individual, often finding
            inspiration in quiet moments. Your artistic endeavors reflect a deep
            understanding of human emotions and experiences. With a poetic soul,
            you craft songs that resonate with authenticity and sincerity. Your
            journey in the music industry has been marked by commitment to
            staying true to your artistic vision. You value creativity and
            individuality, and your work inspires those who appreciate
            introspection. You are reflective and often analyze situations
            carefully before acting. Your sincerity draws people towards you,
            and your honesty is appreciated. You approach life with a balance of
            thoughtfulness and passion. Your introspective nature allows you to
            connect deeply with others on emotional levels. You create art that
            not only entertains but also provokes thought and emotion.
          </p>
        );
      case 'm':
        return (
          <p>
            You are a dynamic and energetic individual with a strong sense of
            purpose. Your journey from reality TV star to respected artist
            showcases your versatility and adaptability. With a sharp wit and
            keen sense of humor, you engage audiences and keep them entertained.
            Your music reflects your life experiences, using your platform to
            address social issues. You are not afraid to speak your mind and use
            your voice to make a difference. You approach challenges with
            determination and resilience. Your charisma allows you to connect
            with people from all walks of life. You are ambitious, constantly
            seeking new opportunities for growth and creativity. Your presence
            inspires energy and motivation in those around you. You leave a
            lasting impact through both your art and your personality.
          </p>
        );
      case 'v':
        return (
          <p>
            You are a disciplined and focused individual, dedicated to your
            craft. Your commitment to excellence is evident in every project you
            undertake. You approach challenges with a calm and steady demeanor,
            achieving results through persistence. Whether on stage or in the
            studio, you maintain a professional attitude. Your attention to
            detail and work ethic set you apart. You inspire others to pursue
            their passions with the same dedication. You value precision and
            take pride in doing things correctly. Your consistent efforts and
            reliability make you a respected figure. You balance creativity with
            structure, producing high-quality outcomes. Your perseverance and
            discipline ensure that you reach your goals successfully.
          </p>
        );
      default:
        return <p>No mentor selected.</p>;
    }
  };

  return (
    <div className='result'>
      <h1>
        Your mentor style:{' '}
        <span>
          {letterToMentor[selectedLetter] || 'Nincs kiválasztva mentor'}
        </span>
      </h1>
      {details(selectedLetter)}
    </div>
  );
};

export default Result;
