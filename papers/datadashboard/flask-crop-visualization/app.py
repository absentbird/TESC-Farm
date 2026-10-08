from flask import Flask, render_template
import matplotlib.pyplot as plt
from matplotlib.ticker import PercentFormatter
import json
import os

app = Flask(__name__)


def load_data():
    with open('data.json') as f:
        return json.load(f)


def create_labor_chart(crops):
    fig, ax = plt.subplots(figsize=(10, 6))
    crops_names = [crop['crop'] for crop in crops]
    total_labor = [sum(crop['labor']) for crop in crops]

    ax.bar(crops_names, total_labor, color='teal')
    ax.set_title('Total Labor Hours per Crop')
    ax.set_ylabel('Total Labor Hours')
    ax.grid(axis='y', linestyle='--')

    plt.tight_layout()
    chart_path = os.path.join('static', 'labor_chart.png')
    plt.savefig(chart_path)
    plt.close()
    return chart_path


def create_stacked_weight_chart(crops):
    fig, ax = plt.subplots(figsize=(10, 6))
    crops_names = [crop['crop'] for crop in crops]
    categories = ['toMarket', 'studentServices', 'waste', 'valueAdded']
    colors = ['#4CAF50', '#FF9800', '#E53935', '#9C27B0']

    # Calculate percentages
    bottoms = [0] * len(crops_names)
    for i, category in enumerate(categories):
        values = [(crop['harvest'][category] / crop['harvest']['total']) * 100 for crop in crops]
        ax.barh(crops_names, values, left=bottoms, color=colors[i], edgecolor='white')
        bottoms = [sum(x) for x in zip(bottoms, values)]

    ax.set_title('Harvest Distribution by Category (%)')
    ax.set_xlabel('Percentage')
    ax.xaxis.set_major_formatter(PercentFormatter())
    ax.legend(categories)

    plt.tight_layout()
    chart_path = os.path.join('static', 'weight_chart.png')
    plt.savefig(chart_path)
    plt.close()
    return chart_path


def create_yield_labor_chart(crops):
    fig, ax = plt.subplots(figsize=(10, 6))
    crops_names = [crop['crop'] for crop in crops]
    total_labor = [sum(crop['labor']) for crop in crops]
    total_harvest = [crop['harvest']['total'] for crop in crops]

    ax.scatter(total_labor, total_harvest, s=100, color='purple')
    for i, txt in enumerate(crops_names):
        ax.annotate(txt, (total_labor[i], total_harvest[i]), ha='center', va='bottom')

    ax.set_title('Total Harvest vs Labor Hours')
    ax.set_xlabel('Total Labor Hours')
    ax.set_ylabel('Total Harvest Weight')
    ax.grid(True, linestyle='--')

    plt.tight_layout()
    chart_path = os.path.join('static', 'yield_chart.png')
    plt.savefig(chart_path)
    plt.close()
    return chart_path


@app.route('/')
def index():
    crops = load_data()
    labor_chart = create_labor_chart(crops)
    weight_chart = create_stacked_weight_chart(crops)
    yield_chart = create_yield_labor_chart(crops)
    return render_template('index.html',
                           labor_chart=labor_chart,
                           weight_chart=weight_chart,
                           yield_chart=yield_chart)


if __name__ == '__main__':
    app.run(debug=True)