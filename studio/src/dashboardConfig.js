export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f593ec54012360083e2b95e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-gsodx4g2',
                  apiId: '9b7554ee-a379-4314-9241-40e56b611ed6'
                },
                {
                  buildHookId: '5f593ec5b3c1da015f708bfc',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ddiiesrr',
                  apiId: 'ff4afde8-db8c-489e-a597-f0362113d060'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kashifkhan0336/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ddiiesrr.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
