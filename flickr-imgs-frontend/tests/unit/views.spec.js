import { shallowMount, mount } from '@vue/test-utils'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'
import FlickrList from '@/components/FlickrList.vue'

describe('Home.vue', () => {
  it('Tests if FlickrList component exists, and key UI elements are in place.', () => {
    
    const wrapper = mount(Home, 
        {
         props: { results: [] }
        ,
        data() {
          return { showChild: true }
        }
      })
    
    expect(wrapper.findComponent({ name: "FlickrList" }).exists()).toBe(true)
    expect(wrapper.find('h4').text()).toContain('Home')
    expect(wrapper.find('Button').text()).toContain('SEARCH')
  })
})


describe('About.vue', () => {
  it('Tests presence of specific text on the About view.', () => {
    const wrapper = shallowMount(About)
    expect(wrapper.find('h4').text()).toEqual('About Us')
    expect(wrapper.find('p').text()).toContain("Welcome to this project's About Us page. This project was developed by Joseph Lubinda. Joseph is a Data Scientist, AI & Software Engineer with over 10 year worth of experience.")
  })
})


describe('Contact.vue', () => {
  it('Tests presence of specific text on the Contact view.', () => {
    const wrapper = shallowMount(Contact)
    expect(wrapper.find('h4').text()).toEqual('Contact Us')
    expect(wrapper.find('p').text()).toContain("Welcome to this project's Contact Us page. You can contact Joseph Lubinda directly by sending an email")
    expect(wrapper.find('p').text()).toContain('jlubinda@obtir.com')
  })
})
