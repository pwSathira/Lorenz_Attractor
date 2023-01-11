import plotly.graph_objects as go
import plotly.offline

# Set up the Lorenz attractor
x, y, z = [1], [1], [1]
dt = 0.01
sigma = 10
rho = 28
beta = 8 / 3
for i in range(10000):
  dx = sigma * (y[-1] - x[-1]) * dt
  dy = (x[-1] * (rho - z[-1]) - y[-1]) * dt
  dz = (x[-1] * y[-1] - beta * z[-1]) * dt
  x.append(x[-1] + dx)
  y.append(y[-1] + dy)
  z.append(z[-1] + dz)

# Create a figure with three traces
fig = go.Figure()
fig.add_trace(go.Scatter3d(x=x, y=y, z=z, marker=dict(size=2)))
# fig.add_trace(go.Scatter(x=x, y=z, line=dict(color='blue')))
# fig.add_trace(go.Scatter(x=y, y=z, line=dict(color='green')))
# Save the figure to a JSON file
plotly.offline.plot(fig, filename='lorenz.html', include_plotlyjs=True)
