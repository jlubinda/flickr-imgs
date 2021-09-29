import { shallowMount, mount } from '@vue/test-utils'
import App from '@/App.vue'
import FlickrList from '@/components/FlickrList.vue'
import SingleImage from '@/components/SingleImage.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Nav from '@/components/Nav.vue'

describe('FlickrList.vue', () => {
  it('Checks if the SingleImage component exists', () => {
    const myres = {
      "title": "ELS RAMATS DE TERELI (Mali, juliol de 2009)",
      "link": "https://www.flickr.com/photos/perfectdayjosep/14410852790/",
      "media": {
          "m": "https://live.staticflickr.com/3922/14410852790_a7a9cf6733_m.jpg"
      },
      "date_taken": "2009-07-30T15:07:32-08:00",
      "description": " <p><a href=\"https://www.flickr.com/people/perfectdayjosep/\">perfectdayjosep</a> posted a photo:</p> <p><a href=\"https://www.flickr.com/photos/perfectdayjosep/14410852790/\" title=\"ELS RAMATS DE TERELI (Mali, juliol de 2009)\"><img src=\"https://live.staticflickr.com/3922/14410852790_a7a9cf6733_m.jpg\" width=\"240\" height=\"161\" alt=\"ELS RAMATS DE TERELI (Mali, juliol de 2009)\" /></a></p> <p>El poblet de Tereli, als peus de la Falla de Bandiagara, al País Dogon, es coneix pel seu mercat que atrau molts habitants d'altres pobles i pels ramats de vaques i cabres.</p>",
      "published": "2014-07-07T16:58:47Z",
      "author": "nobody@flickr.com (\"perfectdayjosep\")",
      "author_id": "8448276@N07",
      "tags": "africa mali dogon paysdogon afrique àfrica tereli perfectdayjosep paísdogon paisdogón cowsandgoats vaquesicabres"
  }

    const wrapper = mount(SingleImage, {
      data() {
        return { showChild: true, res: myres }
      }
    })
  
    expect(wrapper.findComponent({ name: "SingleImage" }).exists()).toBe(true)

  })
})
describe('App.vue', () => {
  it('Checks if the Header and Footer components exist', () => {

    const wrapper = mount(App, {
      data() {
        return { showChild: true }
      }
    })
  
    expect(wrapper.findComponent({ name: "Header" }).exists()).toBe(true)
    expect(wrapper.findComponent({ name: "Footer" }).exists()).toBe(true)

  })
})


describe('SingleImage.vue', () => {
  it('Checks to make sure the Key UI elements are present, and the component is rendering the Flickr data correctly.', () => {
    var res = {
      "title": "ELS RAMATS DE TERELI (Mali, juliol de 2009)",
      "link": "https://www.flickr.com/photos/perfectdayjosep/14410852790/",
      "media": {
          "m": "https://live.staticflickr.com/3922/14410852790_a7a9cf6733_m.jpg"
      },
      "date_taken": "2009-07-30T15:07:32-08:00",
      "description": " <p><a href=\"https://www.flickr.com/people/perfectdayjosep/\">perfectdayjosep</a> posted a photo:</p> <p><a href=\"https://www.flickr.com/photos/perfectdayjosep/14410852790/\" title=\"ELS RAMATS DE TERELI (Mali, juliol de 2009)\"><img src=\"https://live.staticflickr.com/3922/14410852790_a7a9cf6733_m.jpg\" width=\"240\" height=\"161\" alt=\"ELS RAMATS DE TERELI (Mali, juliol de 2009)\" /></a></p> <p>El poblet de Tereli, als peus de la Falla de Bandiagara, al País Dogon, es coneix pel seu mercat que atrau molts habitants d'altres pobles i pels ramats de vaques i cabres.</p>",
      "published": "2014-07-07T16:58:47Z",
      "author": "nobody@flickr.com (\"perfectdayjosep\")",
      "author_id": "8448276@N07",
      "tags": "africa mali dogon paysdogon afrique àfrica tereli perfectdayjosep paísdogon paisdogón cowsandgoats vaquesicabres"
  }
    const wrapper = mount(SingleImage, {
        props: { res }
      })
    var my_titlex = "ELS RAMATS DE TERELI (Mali, juliol de 2009)"
    var my_title = my_titlex.substring(0,29)

    expect(wrapper.find('#flickr_title').text()).toContain(my_title)
    expect(wrapper.find('.card-title').text()).toContain(my_title)
    expect(wrapper.find('a').text()).toEqual("Open on Flickr")
    expect(wrapper.find('#date_taken').text()).toContain("2009-07-30T15:07:32-08:00")
    expect(wrapper.find('#published').text()).toContain("2014-07-07T16:58:47Z")
    expect(wrapper.find('#author').text()).toContain("perfectdayjosep")
    expect(wrapper.find('#tags').text()).toContain("africa mali dogon paysdogon afrique àfrica tereli perfectdayjosep paísdogon paisdogón cowsandgoats vaquesicabres")
  })
})


describe('Footer.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(Footer)
    expect(wrapper.find('div').text()).toEqual('© 2021 Joseph Lubinda')
  })
})


describe('Nav.vue', () => {
  it('Checks to make sure the Navigation menu has the required elements.', () => {
    
    const wrapper = shallowMount(Nav)
    expect(wrapper.find('.brand-logo').text()).toEqual('flickr-imgs')
    
    expect(wrapper.find('#nav_home').text()).toContain('Home')
    expect(wrapper.find('#nav_about').text()).toContain('About Us')
    expect(wrapper.find('#nav_contact').text()).toContain('Contact Us')
  })
})



describe('Header.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = ''
    const wrapper = shallowMount(Header, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
