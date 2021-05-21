export default function handler(req, res) {
  return new Promise((resolve, reject) => {
    const { name, service, contact } = req.body

    const notionApi = 'https://api.notion.com/v1/pages'

    fetch(notionApi, {
      method: 'post',
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTION_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        parent: { database_id: 'b6b7ec4e3e6e4a0d868bb8395c9b7c23' },
        properties: {
          Name: {
            title: [
              {
                text: {
                  content: name,
                },
              },
            ],
          },
          Contact: {
            rich_text: [
              {
                text: {
                  content: contact,
                },
              },
            ],
          },
          Service: {
            rich_text: [
              {
                text: {
                  content: service,
                },
              },
            ],
          },
        },
      }),
    })
      .then(res => res.json())
      .then(data => {
        res.status(200).json({ data }).end()
        resolve()
      })
      .catch(err => {
        res.status(500).json({ err }).end()
        reject()
      })
  })
}