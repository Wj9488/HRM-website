import {defineConfig, StudioNavbar} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import StudioSanityNavbar from './components/StudioSanityNavbar';

export default defineConfig({
  basePath: "/studio",
  name: 'HRM__Blog_Content_Studio',
  title: 'HRM Blog Content Studio',

  projectId: "mzhyqypn",
  dataset: "production",

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  studio: {
    components: {
      navbar: StudioSanityNavbar,
    }
  }
})
