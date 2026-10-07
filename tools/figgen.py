"""Hulpfuncties om de uit Figma gelezen etalage-lagen compact als JSON op te slaan (data/etalage-N.json)."""
import json
GRAD = 'linear-gradient(135deg,rgb(232,51,79) 14.29%,rgb(126,12,30) 85.71%)'
def _o(d, **kw):
    for k, v in kw.items():
        if v is not None: d[k] = v
    return d
def _t(s): return s.replace('§', "'").replace('¶', '\n')
def T(x, y, w, h, s, fam='Inter', st='Regular', size=13, col='rgb(17,17,17)', ls=0, lh=0, ul=0, up=0, a='L', ar=1, segs=None):
    ss = [[_t(q[0])] + list(q[1:]) for q in segs] if segs else [[_t(s), fam, st, size, col, ls, lh, ul, up]]
    return {"t": "T", "x": x, "y": y, "w": w, "h": h, "s": ss, "a": a, "ar": ar}
def F(x, y, w, h, **kw): return _o({"t": "F", "x": x, "y": y, "w": w, "h": h}, **kw)
def R(x, y, w, h, **kw): return _o({"t": "R", "x": x, "y": y, "w": w, "h": h}, **kw)
def L(x, y, w, h, **kw): return _o({"t": "L", "x": x, "y": y, "w": w, "h": h, "c": 9999}, **kw)
def V(x, y, w, h, vb, v): return {"t": "V", "x": x, "y": y, "w": w, "h": h, "vb": vb, "v": v.replace('§', '"')}
def G(k2): return {"t": "G", "x": 0, "y": 0, "w": 0, "h": 0, "k2": k2}
STAR_P = '<path d="M5.0467 0L6.58727 3.13427L10.0934 3.6655L7.54349 6.10917L8.12784 9.56217L5.0467 7.91535L1.96556 9.56217L2.54991 6.10917L0 3.6655L3.50613 3.13427L5.0467 0Z" fill="#FFB400"/>'
def STAR(x, y): return F(x, y, 12.75, 12.75, cl=1, k2=[V(1.33, 1.33, 10.09, 9.56, '0 0 11 10', STAR_P)])
def PATHS(*ds):  # aanwijslijnen: (x, y, w, h, vb, d)
    return F(0, 0, 1920, 1120, cl=1, k2=[V(x, y, w, h, vb, '<path d="%s" stroke="white" stroke-opacity="0.42" stroke-width="1.5" stroke-linejoin="round"/>' % d) for x, y, w, h, vb, d in ds])
def CALL(x, y, h, n, nx, nw, title, tw, desc, dh):
    th = 42 if dh == 19 else 61
    return F(x, y, 316, h, f=["rgba(0,0,0,0.5)"], k=["rgba(255,255,255,0.12)", 1, 0], c=18,
             e=[["d", 0, 0, 36, 0, "rgba(130,0,18,0.45)"], ["g", 20]], cl=1, k2=[
        F(17, 17, 28, 28, f=[GRAD], c=14, cl=1, k2=[T(nx, 6.5, nw, 15, str(n), st='Bold', size=12, col='rgb(255,255,255)')]),
        F(59, 17, 236, th, cl=1, k2=[T(0, 0, tw, 19, title, st='Semi Bold', size=16, col='rgb(255,255,255)'),
                                      T(0, 23, 236, dh, desc, size=13, col='rgba(255,255,255,0.62)', lh=19, ar=0)])])
def SLOT(x, w, label, lw, btn_w, btn_t, btn_tw, link_x, link_w):
    return F(x, 960, w, 51, cl=1, k2=[
        F(0, 5.5, lw + 54, 40, f=["rgba(255,255,255,0.06)"], k=["rgba(255,255,255,0.16)", 1, 0], c=30, cl=1, k2=[
            L(17, 16, 8, 8, f=["rgb(31,217,89)"], e=[["d", 0, 0, 8, 0, "rgba(31,217,89,0.9)"]]),
            T(35, 13, lw, 14, label, fam='Orbitron', st='Medium', size=11, col='rgba(255,255,255,0.9)', ls=2.42)]),
        F(lw + 76, 0, btn_w, 51, f=["rgb(255,255,255)"], c=40, e=[["d", 0, 0, 24, 0, "rgba(232,51,79,0.35)"]], cl=1, k2=[
            T(28, 16, btn_tw, 19, btn_t, st='Semi Bold', size=16, col='rgb(129,0,18)')]),
        T(link_x, 16, link_w, 19, 'Alle projecten', st='Semi Bold', size=16, col='rgba(255,255,255,0.75)', ul=1)])
def save(n, d):
    json.dump(d, open('data/etalage-%d.json' % n, 'w'), ensure_ascii=False, separators=(',', ':'))
    print('etalage', n, len(json.dumps(d, separators=(',', ':'))), 'bytes')
