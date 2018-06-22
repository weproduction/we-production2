const cyrillic = 'абвгґдеєжзиіїйклмнопрстуфхцчшщьюя'.split('');
const replacement = 'a,b,v,h,g,d,e,je,zh,z,y,i,ji,j,k,l,m,n,o,p,r,s,t,u,f,x,c,ch,sh,shch,,ju,ja'.split(',');
const whitelist = '0123456789abcdefghijklmnopqrstuvwxyz'.split('');

module.exports = (text) => {
    return text
        .toLocaleLowerCase()
        .split('')
        .map(c => ~cyrillic.indexOf(c) ? replacement[cyrillic.indexOf(c)] : c)
        .join('')
        .split('')
        .map(c => ~whitelist.indexOf(c) ? c : '-')
        .join('')
        .replace(/(\-+)/gi, '-');
};
