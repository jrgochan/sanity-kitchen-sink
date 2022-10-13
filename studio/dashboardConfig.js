export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '634774d804e42938d40285f0',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ariwtins',
                  apiId: 'ae1459fb-92e8-4538-913d-26531a96e439'
                },
                {
                  buildHookId: '634774d964a3302de059513f',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-qkavgk5j',
                  apiId: '937c1533-30e3-4406-af67-71c18a277efa'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jrgochan/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-qkavgk5j.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
