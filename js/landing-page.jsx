import React from "react"
import {
  Hero,
  ImageList, ImageListItem,
  Page,
  Section
} from "neal-react"
import ScrollableAnchor from 'react-scrollable-anchor'
import { Team, TeamMember } from "./components/team.jsx"
import { Footer } from "./components/footer.jsx"

const brandName = "New Normal LLC"

const businessAddress = (
    <address>
      <strong>{brandName}</strong><br />
      <b>Smith Tower</b><br />
      506 2nd Avenue<br />
      Seattle, WA 98104
    </address>
)


export default (props) => {
  return (
      <Page>
        <Section className="logos">
          <ImageList centered>
            <ImageListItem src="img/geekhub-logo-white.svg" url="http://geekhub.ck.ua" />
            <ImageListItem src="img/nn-logo-white.svg" url="https://newnormal.agency" />
          </ImageList>
        </Section>

        <Hero backgroundImage="img/hero-background.jpg"
              className="text-xs-center">
          <h1 className="display-5">NEW NORMAL LOVES GEEKHUB</h1>
          <p className="lead">Вітаємо у 8 сезоні! Ми раді підтримати Geekhub цього року. New Normal - це не просто бізнес, ми змінюємо простір економічних можливостей для молоді нашого міста.</p>
          <p>
            <a href="#section-strong-relation" className="btn btn-white">
              Дізнатися більше
            </a>
          </p>
        </Hero>

        <ScrollableAnchor id={'section-strong-relation'}>
          <Section className="subhero text-center pt-5">
            <p>New Normal будує тривалі відносини між командою і клієнтами, що дає нам можливість працювати над цікавими проектами у приємній компанії.</p>
            <p>Ми пишаємося своєю співпрацею із найуспішнішими компаніями світу.</p>
            <ImageList centered>
              <ImageListItem src="img/clients/toyota.png" url="https://www.toyota.com/" />
              <ImageListItem src="img/clients/sw.png" url="https://en.wikipedia.org/wiki/Southwest_Airlines" />
              <ImageListItem src="img/clients/amazon.png" url="http://amazon.com" />
              <ImageListItem src="img/clients/zwave.png" url="https://zwave.com" />
            </ImageList>
          </Section>
        </ScrollableAnchor>

        <Section className="text-center">
          <h4>Філософія NN</h4>

          <p>Цей GeekTalk від нашого СЕО допоможе зрозуміти унікальний підхід до стосунків із клієнтами.</p>

          <div className="video-embed">
            <iframe width="560" height="315"
                    src="https://www.youtube-nocookie.com/embed/OMjJN_bd0w8?rel=0&amp;showinfo=0"
                    frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          </div>
        </Section>

        <Section className="text-center subhero mt-0 pt-5 pb-5">
          <h4>Стань частиною команди</h4>

          <p>Ми завжди шукаємо талановитих людей в свою команду.
            Почни діалог сьогодні.</p>

          <p>Напиши <a href="mailto:alina.mukosii@newnormal.agency">alina.mukosii@newnormal.agency</a></p>
        </Section>

        <div className="team-photo">
          <ImageList centered>
            <ImageListItem src="img/team-photo.jpg" />
          </ImageList>
        </div>

        <Footer brandName={brandName}
                facebookUrl="https://www.facebook.com/N3wNormal/"
                linkedinURL="https://www.linkedin.com/company/new-normal-agency/"
                address={businessAddress}>
        </Footer>
      </Page>
  )
};
