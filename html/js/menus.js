const menus = [
  {
    id: 1,
    attributes: {
      name: 'product',
      pid: 0,
      mid: 1
    }
  },
  {
    id: 2,
    attributes: {
      name: 'sbu_product1',
      pid: 1,
      mid: 2
    }
  },
  {
    id: 3,
    attributes: {
      name: 'product2',
      pid: 0,
      mid: 3
    }
  },
 
  {
    id: 4,
    attributes: {
      name: 'sub_product3',
      pid: 4,
      mid: 5
    }
  },
  {
    id: 5,
    attributes: {
      name: 'product3',
      pid: 0,
      mid: 4
    }
  },
  {
    id: 6,
    attributes: {
      name: 'sub_sub_product3',
      pid: 5,
      mid: 6
    }
  },
]
function getMenus(menus, parent) {
  let parentId = 0
  let i = 0
  if (parent) {
    parentId = parent.attributes.mid
  }
  const menuall = []
  // debugger
  let child;
  while (menus.length > 0 && menus.length > i) {
    // debugger
    let item = menus[i]
    item = {
      ...item.attributes,
      id: item.id,
      children: []
    }
    let subMenus = null
    if (parentId === item.pid) {
      child = menus.splice(i, 1)[0]
      subMenus = getMenus(menus, child)
      child.children=subMenus
      menuall.push(child)
    }
    if(subMenus !== null) {
      i = 0
    } else {
      i++
    }
  }
  return menuall

}
const m = getMenus(menus)
console.log(m, 'm')