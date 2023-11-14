import axios from 'axios'
import { createApp, reactive } from 'https://unpkg.com/petite-vue?module'

// Store
const store = reactive({
  form: {
    project: 'Дизайн проект интерьера',
    city: 'Алматы',
    square: 50,
    name: '',
    phone: '',
  },
  fetchResult: {
    faq: {
      oneTitle: 'loading...',
      oneSupTitle: 'loading...',
      twoTitle: 'loading...',
      twoSupTitle: 'loading...',
      threeTitle: 'loading...',
      threeSupTitle: 'loading...',
    },
    objects: {
      mainNumber: 'loading...',
      numberOne: 'loading...',
      numberTwo: 'loading...',
      numberThree: 'loading...',
    },
    services: {
      oneTitle: 'loading...',
      oneSupTitle: 'loading...',
      oneDesc: 'loading...',
      twoTitle: 'loading...',
      twoSupTitle: 'loading...',
      twoDesc: 'loading...',
      threeTitle: 'loading...',
      threeSupTitle: 'loading...',
      threeDesc: 'loading...',
      fourTitle: 'loading...',
      fourSupTitle: 'loading...',
      fourDesc: 'loading...',
    },
    settings: { number: 'loading...', },
    stages: {
      oneTitle: 'loading...',
      oneDesc: 'loading...',
      twoTitle: 'loading...',
      twoDesc: 'loading...',
      threeTitle: 'loading...',
      threeDesc: 'loading...',
      fourTitle: 'loading...',
      fourDesc: 'loading...',
      fiveTitle: 'loading...',
      fiveDesc: 'loading...',
      sixTitle: 'loading...',
      sixDesc: 'loading...',
      sevenTitle: 'loading...',
      sevenDesc: 'loading...',
      eightTitle: 'loading...',
      eightDesc: 'loading...',
    },
    welcome: { welcomeTitle: 'loading...', welcomeSupTitle: 'loading...', welcomeDesc: 'loading...'},
  },
  isModalOpen: false,
  anotherProject: '',
  anotherCity: '',
  check: false,
  currentStep: 1,
  errors: [],
  steps: [
    {
      value: 1,
      errorMessage: [{ project: 'Выберте проект' }],
    },
    {
      value: 2,
      errorMessage: [{ city: 'Выберте город' }],
    },
    {
      value: 3,
      errorMessage: [{ name: 'Введите имя' }, { phone: 'Введите телефон' }],
    },
    {
      value: 4,
    },
  ],
  projectOptions: [
    {
      id: 'project-1',
      value: 'Дизайн проект интерьера',
      description: 'Описание проекта',
    },
    {
      id: 'project-2',
      value: 'Архитектурний проект дома',
      description: 'Lorem isa sdadasd sda',
    },
    {
      id: 'project-3',
      value: 'Ремонт под ключ',
      description: 'Lorem isa sdadasd sda',
    },
  ],
  cityOptions: [
    {
      id: 'city-1',
      value: 'Алматы',
      description: 'Lorem isa sdadasd sda',
    },
    {
      id: 'city-2',
      value: 'Астана',
      description: 'Lorem isa sdadasd sda',
    },
    {
      id: 'city-3',
      value: 'Шымкент',
      description: 'Lorem isa sdadasd sda',
    },
  ],
  get isErrors() {
    return this.errors.length > 0
  },
  getStep(step) {
    return this.steps.find((item) => item.value === step)
  },
  fetchData() {
    axios.get('https://hudos-admin.vercel.app/api/faq').then((resp) => {
      const faq = store.fetchResult.faq;
      faq.oneTitle = resp.data[0].oneTitle;
      faq.oneSupTitle = resp.data[0].oneSupTitle;
      faq.twoTitle = resp.data[0].twoTitle;
      faq.twoSupTitle = resp.data[0].twoSupTitle;
      faq.threeTitle = resp.data[0].threeTitle;
      faq.threeSupTitle = resp.data[0].threeSupTitle;
    });
    
    axios.get('https://hudos-admin.vercel.app/api/objects').then((resp) => {
      const objects = store.fetchResult.objects;
      objects.mainNumber = resp.data[0].mainNumber;
      objects.numberOne = resp.data[0].numberOne;
      objects.numberTwo = resp.data[0].numberTwo;
      objects.numberThree = resp.data[0].numberThree;
    });
    
    axios.get('https://hudos-admin.vercel.app/api/services').then((resp) => {
      const services = store.fetchResult.services;
      services.oneTitle = resp.data[0].oneTitle;
      services.oneSupTitle = resp.data[0].oneSupTitle;
      services.oneDesc = resp.data[0].oneDesc;
      services.twoTitle = resp.data[0].twoTitle;
      services.twoSupTitle = resp.data[0].twoSupTitle;
      services.twoDesc = resp.data[0].twoDesc;
      services.threeTitle = resp.data[0].threeTitle;
      services.threeSupTitle = resp.data[0].threeSupTitle;
      services.threeDesc = resp.data[0].threeDesc;
      services.fourTitle = resp.data[0].fourTitle;
      services.fourSupTitle = resp.data[0].fourSupTitle;
      services.fourDesc = resp.data[0].fourDesc;
    });
    
    axios.get('https://hudos-admin.vercel.app/api/settings').then((resp) => {
      const settings = store.fetchResult.settings;
      settings.number = resp.data[0].number;
    });
    
    axios.get('https://hudos-admin.vercel.app/api/stages').then((resp) => {
      const stages = store.fetchResult.stages;
      stages.oneTitle = resp.data[0].oneTitle;
      stages.oneDesc = resp.data[0].oneDesc;
      stages.twoTitle = resp.data[0].twoTitle;
      stages.twoDesc = resp.data[0].twoDesc;
      stages.threeTitle = resp.data[0].threeTitle;
      stages.threeDesc = resp.data[0].threeDesc;
      stages.fourTitle = resp.data[0].fourTitle;
      stages.fourDesc = resp.data[0].fourDesc;
      stages.fiveTitle = resp.data[0].fiveTitle;
      stages.fiveDesc = resp.data[0].fiveDesc;
      stages.sixTitle = resp.data[0].sixTitle;
      stages.sixDesc = resp.data[0].sixDesc;
      stages.sevenTitle = resp.data[0].sevenTitle;
      stages.sevenDesc = resp.data[0].sevenDesc;
      stages.eightTitle = resp.data[0].eightTitle;
      stages.eightDesc = resp.data[0].eightDesc;
    });
    
    axios.get('https://hudos-admin.vercel.app/api/welcome').then((resp) => {
      const welcome = store.fetchResult.welcome;
      welcome.welcomeTitle = resp.data[0].welcomeTitle;
      welcome.welcomeSupTitle = resp.data[0].welcomeSupTitle;
      welcome.welcomeDesc = resp.data[0].welcomeDesc;
    });
  },
  checkErrors(step) {
    this.clearError()
    const findStep = this.getStep(step)

    findStep.errorMessage.forEach((item) => {
      Object.keys(item).forEach((key) => {
        const hasError = this.errors.find((item) => item.key === key)
        const isValue = this.form[key] === ''

        if (isValue && hasError) {
          return
        }

        if (isValue && !hasError) {
          this.errors.push({
            key,
            message: item[key],
          })
          return
        }

        this.errors = this.errors.filter((item) => item.key !== key)
      })
    })
  },
  moveStep(step) {
    if (step < this.currentStep) {
      this.currentStep = step
      this.clearError()
      return
    }

    this.checkErrors(step)
    if (this.isErrors) {
      return
    }

    if (this.currentStep === this.getStep(3).value) {
      // Submit form
      console.log(store.form)
      this.resetForm()

      setTimeout(() => {
        this.closeModal()
      }, 2000)
    }

    const findStep = this.getStep(step)
    this.currentStep = findStep.value + 1
  },
  changeAnotherOption(value, key, anotherVal) {
    this.form[key] = value.trim()
    this[anotherVal] = value.trim()
    this.clearError()
  },
  changeProject() {
    this.anotherProject = ''
    this.clearError()
  },
  changeCity() {
    this.anotherCity = ''
    this.clearError()
  },
  showModal(step) {
    this.isModalOpen = true

    if (step) {
      this.moveStep(step)
    }
  },
  closeModal() {
    this.isModalOpen = false
    this.resetForm()
  },
  resetForm() {
    this.form = {
      project: 'Дизайн проект интерьера',
      city: 'Алматы',
      square: 50,
      name: '',
      phone: '',
    }
    this.anotherProject = ''
    this.anotherCity = ''
    this.check = false
    this.currentStep = 1
  },
  clearError() {
    this.errors = []
  },
})
// Components

function Btn({ value }) {
  return {
    $template: '#btn-template',
    value,
  }
}
createApp({
  store,
  Btn,
}).mount()
