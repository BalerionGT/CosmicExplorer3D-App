## Description du Projet
Ce projet vise à prévoir la demande des produits du terroir marocain sur les marchés national et international. En utilisant des techniques de modélisation basées sur les données, nous avons développé des modèles pour anticiper la demande future et fournir des stratégies de développement et de commercialisation efficaces.

## Structure du Projet
- `data/` : Contient le fichier de données `maroc_exports.csv`.
- `code/` : Contient les scripts Python pour la collecte, le nettoyage, l'analyse et la modélisation des données.
- `results/` : Contient les résultats de l'analyse et des visualisations.

## Utilisation avec Google Colab
1. Ouvrez [Google Colab](https://colab.research.google.com/).
2. Téléchargez le fichier de données `exports_by_product.csv` dans votre Google Drive.
3. Chargez le notebook Colab associé à ce projet depuis votre Google Drive ou GitHub.

### Installation des dépendances
Google Colab a la plupart des dépendances installées par défaut. Cependant, vous pouvez installer les packages nécessaires en exécutant la cellule suivante dans Colab :
```python
!pip install pandas numpy seaborn matplotlib scikit-learn tensorflow


from google.colab import drive
drive.mount('/content/drive')


data_path = '/content/drive/My Drive/chemin_vers_votre_fichier/exports_by_product.csv'
dt = pd.read_csv(data_path)
```
### Usage
Pour exécuter le preprocessing des données et l'établissement du modèle
```python
python code/data_preprocessing.py
python code/model.py
```


