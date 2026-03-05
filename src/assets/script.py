# -*- coding: utf-8 -*-
import re
from xml.dom import minidom

# Charger le fichier SVG
with open("Section 3.svg", "r", encoding="utf-8") as f:
    svg_content = f.read()

# Parser le SVG
doc = minidom.parseString(svg_content)
paths = doc.getElementsByTagName('path')

# Fonction pour extraire les coordonnées depuis un attribut d
def extract_coords_from_path(d_attr):
    numbers = re.findall(r"[-+]?\d*\.\d+|[-+]?\d+", d_attr)
    coords = list(map(float, numbers))
    return list(zip(coords[::2], coords[1::2]))

# Fonction pour calculer le centre d’un polygone
def polygon_center(points):
    if not points:
        return None
    xs = [p[0] for p in points]
    ys = [p[1] for p in points]
    return round(sum(xs) / len(xs)), round(sum(ys) / len(ys))

# Extraire les centres
hex_centers = []
for path in paths:
    d_attr = path.getAttribute("d")
    points = extract_coords_from_path(d_attr)
    center = polygon_center(points)
    if center:
        hex_centers.append(center)

# Affichage des résultats
for i, (x, y) in enumerate(hex_centers):
    print(f'{{ x: {x}, y: {y}, label: "Skill {i+1}" }},')
