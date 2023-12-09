const data = [
  {
    name: '供应商1',
    children: [
      {
        name: '供应商1-1',
        children: [
          {
            name: '供应商1-1-1'
          }
        ]
      },
      {
        name: '供应商1-2',
        children: [
          {
            name: '供应商1-2-1'
          }
        ]
      }
    ]
  },
  {
    name: '供应商2',
    children: [
      {
        name: '供应商1-1',
        children: [
          {
            name: '供应商2-1-1'
          }
        ]
      },
      {
        name: '供应商1-2',
        children: [
          {
            name: '供应商2-2-1'
          }
        ]
      }
    ]
  },
  {
    name: '供应商3',
    children: [
      {
        name: '供应商1-1',
        children: [
          {
            name: '供应商2-1-1',
            children: [
              {
                name: '供应商3-1-1'
              }
            ]
          }
        ]
      }
    ]
  }
]

const caches = []
const links = []

function traverse (data, level, parent) {
  data.forEach(item => {
    if (!caches[level]) caches[level] = []
    if (level !== 0) {
      if (caches[level].findIndex(i => i.name === item.name) === -1) caches[level].push(item)
      links.push({
        source: parent.name,
        target: item.name
      })
    } else {
      if (caches[level].findIndex(i => i.name === item.name) === -1) caches[level].push(item)
    }
    if (item.children) {
      traverse(item.children, level + 1, item)
    }
  })
}
traverse(data, 0)

const lens = caches.map(c => c.length)
const maxLen = Math.max(...lens)
function generateXY () {
  for (let i = 0; i < caches.length; i ++ ) {
    for (let j = 0; j < caches[i].length; j ++) {
      const totalLong = maxLen * 100
      const singleLong = totalLong / caches[i].length
      Object.assign(caches[i][j], {
        level: i,
        fixed: true,
        value: [ (0.5 + j) * singleLong, (caches.length - i) * 100 ],
        x: (0.5 + j) * singleLong,
        y: (caches.length - i) * 100,
        category: 1,
        label: {
          color: "#fff"
        }
      })
    }
  }
}
generateXY()

export {
  caches,
  links
}
