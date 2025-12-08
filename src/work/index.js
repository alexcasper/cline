// Work page component
export const workContent = `
<style>
.work-container {
  max-width: 768px;
  margin: 0 auto;
  padding: 60px 20px;
}

.work-container h1 {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 40px;
  color: rgba(0, 0, 0, 0.8);
}

.work-container .intro {
  font-size: 18px;
  line-height: 1.6;
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 60px;
}

.work-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 40px;
  margin-top: 40px;
}

.work-item {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.work-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.work-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.work-item-content {
  padding: 24px;
}

.work-item h3 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 12px;
  color: rgba(0, 0, 0, 0.8);
}

.work-item p {
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.6);
}
</style>

<div class="work-container">
  <h1>Work</h1>
  <div class="intro">
    <p>A collection of projects, research, and creative endeavors.</p>
  </div>

  <div class="work-grid">
    <div class="work-item">
      <div class="work-item-content">
        <h3>Project Title</h3>
        <p>Description of the project and its key features.</p>
      </div>
    </div>
    <!-- Add more work items as needed -->
  </div>
</div>
`;
